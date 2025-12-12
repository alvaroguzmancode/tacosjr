ssh -i /Users/alvaro/Documents/projects/vps/vps/vps/ovh_rsa.pem ubuntu@148.113.180.49 '
cd /home/ubuntu/projects/tacosjr/tacosjr &&
git pull &&
(npx pm2 delete tacosjr || true) &&
yarn build &&
npx pm2 start "serve -s dist -l 3002" --name tacosjr
'
