#!/bin/bash

{ # this ensures the entire script is downloaded #

echo "Getting initial dependencies..."

system_has() {
  type "$1" > /dev/null 2>&1
}

currentnodeversion="$(node --version)"
requirednodeversion="v12.18.3"

currentnpmversion="$(npm --version)"
requirednpmversion="6.14.6"

project_name="$1"

if ! system_has git; then
  echo "git is mandatory to continue"
  echo "Check this guide to complete the installation: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"
  exit 1

elif [ "$(printf '%s\n' "$requirednodeversion" "$currentnodeversion" | sort -V | head -n1)" != "$requirednodeversion" ]; then 
  echo "The node version must be >= v12.18.3"
  exit 1
elif [ "$(printf '%s\n' "$requirednpmversion" "$currentnpmversion" | sort -V | head -n1)" != "$requirednpmversion" ]; then 
  echo "The npm version must be >= v6.14.6"
  exit 1
fi


git clone git@gitlab.com:zerf-development/web-bootstrap.git
cp -r ./web-bootstrap "./$project_name"
rm -rf "./$project_name/.git"
rm -rf ./web-bootstrap

echo "The new project has been initialized. You must change its name and initialize its git repository"

wait $!

} # this ensures the entire script is downloaded #