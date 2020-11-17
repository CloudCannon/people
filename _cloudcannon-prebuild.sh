npm i
if [ "$STORYBOOK" = "foo" ] then
  npm run build-storybook
else
  npm run build 
fi
