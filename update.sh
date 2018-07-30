pushd ../ducor-backend
git pull
yarn
popd

pushd ../ducor-frontend
git pull
yarn
yarn build
popd
