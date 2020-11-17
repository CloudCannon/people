npm i
if [ "$STORYBOOK" = "true" ] then
  npm run build-storybook
else
  npm run build 
fi
