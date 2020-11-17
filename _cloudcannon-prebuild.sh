npm i
if [ "$STORYBOOK" ] 
then
  npm run build-storybook
else
  npm run build 
fi
