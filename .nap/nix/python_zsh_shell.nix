let
nixpkgs = import (builtins.fetchTarball https://github.com/NixOS/nixpkgs/archive/20.03.tar.gz) {
  overlays = [];
  config = {};
};

in
with nixpkgs;

stdenv.mkDerivation {
  name = "python-env";

  nativeBuildInputs = [
    zsh
    vim
    python37
    python37Packages.pip
    python37Packages.virtualenv
  ];

  # ENV variables
  PROJDIR = "${toString ./.}";

  # Post Shell Hook
  shellHook = ''
    echo "Using ${python37.name}"

    [ ! -d '$PROJDIR/python-dev' ] && virtualenv python-dev && echo "SETUP python-dev: DONE"
    source python-dev/bin/activate
    # python -m pip install -r requirements.txt
  '';
}

