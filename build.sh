sudo ssh -i /Users/alvaro/Documents/projects/vps/vps/vps/ovh_rsa.pem ubuntu@148.113.180.49 '
cd /home/ubuntu/projects/tacosjr/tacosjr &&
git pull &&
(/home/ubuntu/.nvm/versions/node/v20.18.1/bin/npx pm2 delete tacosjr || true) &&
/home/ubuntu/.nvm/versions/node/v20.18.1/bin/yarn build &&
/home/ubuntu/.nvm/versions/node/v20.18.1/bin/npx pm2 start "serve -s dist -l 3002" --name tacosjr
'
