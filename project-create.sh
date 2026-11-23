#!/bin/bash

filePath="$HOME/Desktop/Fullstack-Learning/freecodecamp"

if [ ! -d "$filePath" ]; then
    echo "Error..."
    echo "folder not found"
    exit 1
fi

folders=($(find "$filePath" -mindepth 1 -maxdepth 1 -type d -printf "%f\n" | sort))

echo "===Select Folders==="
for i in "${!folders[@]}"; do
    echo "$((i+1)). ${folders[$i]}"
done
echo "$(( ${#folders[@]} + 1 )). Create a new folder"

read -p "Choose a folder number: " choice

if [[ "$choice" -ge 1 && "$choice" -le "${#folders[@]}" ]]; then 
    parentFolder="${folders[$((choice-1))]}"
elif [[ "$choice" -eq $(( ${#folders[@]} + 1 )) ]]; then
    read -p "Enter the new folder name: " parentFolder
else 
    echo "Invalid Choice!"
    exit 1
fi

makeDir="$filePath/$parentFolder"
mkdir -p "$makeDir"

read -p "How many files do you want to create: " filesNum

for (( i=1; i<=filesNum; i++ )); do
    read -p "Enter file #$i name: " fileName

    if [[ -z "$fileName" ]]; then
        continue
    fi

    if [[ "$fileName" == *.html ]]; then
        cat << 'EOF' > "$makeDir/$fileName"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    
</body>
</html>
EOF
    else
        touch "$makeDir/$fileName"
    fi
done

echo "Success in creating folder and files in $makeDir!"

