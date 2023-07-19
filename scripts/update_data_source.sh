#!/bin/sh

remove_tmp_dir() {
  rm -fr scripts/tmp
}

# Update contents of src/data directory
update_data_dir() {
  rm -fr src/data/*
  touch src/data/version.txt
  echo $latest_ver >src/data/version.txt
  cp -r scripts/tmp/tldr/pages* src/data/
  remove_tmp_dir
}

# Download source data if it doesn't exist
if [ ! -d src/data ]; then
  echo "Data source is empty. Downloading..."

  # Download tldr
  mkdir scripts/tmp
  git clone https://github.com/tldr-pages/tldr.git scripts/tmp/tldr
  latest_ver=$(git -C scripts/tmp/tldr tag | tail -n 1)

  mkdir src/data

  update_data_dir

  echo ""
  echo "...data source was downloaded"

else

  # Get current version of tldr that is used in the app
  current_ver=$(cat src/data/version.txt)

  # Download tldr and get the latest version
  mkdir scripts/tmp
  git clone https://github.com/tldr-pages/tldr.git scripts/tmp/tldr
  latest_ver=$(git -C scripts/tmp/tldr tag | tail -n 1)

  # Check and update if needed
  if [ "$current_ver" == "$latest_ver" ]; then
    remove_tmp_dir

    echo ""
    echo "You have the latest version"
  else
    echo ""
    echo "New version is available. Downloading..."

    update_data_dir

    echo ""
    echo "...data source was updated"
  fi

fi
