#!/bin/sh

download_assets() {
  mkdir tmp

  curl -L $tarball_url | tar -xz -C ./tmp
  extracted_directory=$(ls -d ./tmp/*/)
  echo $extracted_directory

  mv "${extracted_directory}"pages* src/data/
  touch src/data/version.txt
  echo $latest_tag >src/data/version.txt

  rm -r ./tmp
}

# Get assets archive URL and the current tag version
tarball_url=$(curl -s https://api.github.com/repos/tldr-pages/tldr/releases/latest | grep -o '"tarball_url": "[^"]*' | cut -d '"' -f 4)
latest_tag="${tarball_url##*/}"

if [ ! -d src/data ]; then
  echo "Data source is empty. Downloading..."

  mkdir src/data

  download_assets

  echo "Data was successfully downloaded."

else
  echo "Checking if data corresponds to the latest release..."

  # Get current version of tldr that is used by the API
  installed_version=$(cat src/data/version.txt)

  if [ "$installed_version" == "$latest_tag" ]; then
    echo "Congratulations. You have the latest version of tldr pages."
  else
    echo "New version is available. Downloading..."

    rm -r src/data/*

    download_assets

    echo "Data was successfully downloaded."
  fi

fi
