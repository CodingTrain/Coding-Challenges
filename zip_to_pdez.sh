#!/bin/bash

# Find all directories named "Processing" recursively
find . -type d -name "Processing" | while read -r processing_dir; do
    # Get the parent directory containing "Processing"
    parent_dir=$(dirname "$processing_dir")
    
    # Get the name of the sketch folder inside the Processing directory
    sketch_folder=$(basename "$(find "$processing_dir" -mindepth 1 -maxdepth 1 -type d)")

    # Navigate into the Processing directory
    cd "$processing_dir" || exit
    
    # Zip the sketch folder and exclude unnecessary files
    zip -r sketch.zip "$sketch_folder" -x "*/build/*" "*/output/*" "*.class" "*.java"
    
    # Rename the .zip file to .pdez
    mv sketch.zip sketch.pdez
    
    # Return to the original directory
    cd - > /dev/null || exit

    echo "Processed: $processing_dir/$sketch_folder"
done
