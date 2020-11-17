npm i
if [[ -z "${STORYBOOK}" ]]; then
  npm run build-storybook
else
  npm run build 
fi
