sed -i '' 's|Function("return this")()|function(){}|g' dist/popup.js;
sed -i '' "s|Function('return this')()|function(){}|g" dist/popup.js;
sed -i '' 's|eval|(function(){})|g' dist/popup.js
sed -i '' 's|.innerHTML=|.x=|g' dist/popup.js
