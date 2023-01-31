{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
      in
      {
        devShells.default = pkgs.mkShell {
          packages = with pkgs; [
            nodejs-18_x
            nodePackages.vue-cli
            nodePackages.vls # vue
            nodePackages.typescript-language-server # typescript
            nodePackages.vscode-langservers-extracted # html, css, json, eslint
          ];
        };
      });
}
