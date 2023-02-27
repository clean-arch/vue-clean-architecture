{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        cypressOverlay = final: prev: {
          cypress = prev.cypress.overrideAttrs (oldAttrs: rec {
            version = "12.3.0";

            src = prev.fetchzip {
              url = "https://cdn.cypress.io/desktop/${version}/linux-x64/cypress.zip";
              sha256 = "sha256-RhPH/MBF8lqXeFEm2sd73Z55jgcl45VsmRWtAhckrP0=";
            };
          });
        };

        pkgs = import nixpkgs {
          inherit system;
          overlays = [ cypressOverlay ];
        };
      in
      {
        devShells = rec {
          code = pkgs.mkShell {
            packages = with pkgs; [
              nodejs-18_x
              nodePackages.vue-cli
              nodePackages.typescript-language-server # typescript
              nodePackages.vscode-langservers-extracted # html, css, json, eslint
            ];
          };
          e2e = pkgs.mkShell {
            shellHook = ''
              export CYPRESS_INSTALL_BINARY=0;
              export CYPRESS_RUN_BINARY="${pkgs.cypress}/bin/Cypress";
            '';
          };
          default = pkgs.mkShell {
            inputsFrom = [ code e2e ];
          };
        };
      });
}
