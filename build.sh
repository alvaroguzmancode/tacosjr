sudo ssh -i /Users/alvaro/Documents/projects/vps/vps/vps/ovh_rsa.pem ubuntu@148.113.180.49 '
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

cd /home/ubuntu/projects/tacosjr/antenek &&
git pull &&
nvm use 20 &&
npx pm2 delete antenek || true
yarn build &&
npx pm2 start "npx serve -s dist -l 3003" --name antenek
'
