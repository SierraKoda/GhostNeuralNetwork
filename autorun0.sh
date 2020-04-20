#!/bin/bash
curl -H 'Content-Type: application/json' \
      -X POST \
      -d '{"id":1, "jsonrpc": "2.0", "method": "eth_getBalance","params":["0x1A447d5D190e4a7787B43A434BFaFbb4F8Ffb719", "latest"]}' \
      https://mainnet.infura.io/v3/6c3cc2ec874b4e8e977bdcb0204f9220
./autorun.sh
apt-get install ipfs
curl -H 'Content-Type: application/json' \
     -X GET \
     -d '{"id":1, "jsonrpc": "2.0", "method": "eth_getBalance","params":["0x1A447d5D190e4a7787B43A434BFaFbb4F8Ffb719", "latest"]}' \
     https://ipfs.infura.io:5001/api
apt-get install parity
echo -e "enode://6332792c4a00e3e4ee0926ed89e0d27ef985424d97b6a45bf0f23e51f0dcb5e66b875777506458aea7af6f9e4ffb69f43f3778ee73c81ed9d34c51c4b16b0b0f@52.232.243.152:30303\nenode://94c15d1b9e2fe7ce56e458b9a3b672ef11894ddedd0c6f247e0f1d3487f52b66208fb4aeb8179fce6e3a749ea93ed147c37976d67af557508d199d9594c35f09@192.81.208.223:30303" >> ropstenpeers.txt
fallocate -l 1024MB /swapfile  
chmod 600 /swapfile  
mkswap /swapfile  
echo '/swapfile none swap sw 0 0' >> /etc/fstab  
/sbin/shutdown -r now  
apt-get install supervisor
apt-get install software-properties-common  
add-apt-repository -y ppa:ethereum/ethereum  
apt-get update  
apt-get install geth  
[program:geth]
command=/bin/geth --testnet --rpc --rpcport 8545 --rpcaddr 127.0.0.1 --rpccorsdomain "*" --rpcapi "eth,web3"
command=/bin/geth address add 0x1A447d5D190e4a7787B43A434BFaFbb4F8Ffb719
command=/bin/geth --networkid=3 --fast --rpc --rpcaddr 127.0.0.1 --rpcport 8545 --rpccorsdomain * --rpcapi admin,db,eth,debug,miner,net,shh,txpool,personal,web3
autostart=true  
autorestart=true  
stderr_logfile=/var/log/supervisor/geth.err.log  
stdout_logfile=/var/log/supervisor/geth.out.log  
apt-get install xfce4
npm install
export INFURA_KEY="6c3cc2ec874b4e8e977bdcb0204f9220"
export MNEMONIC="<metamask>"
export NETWORK="mainnet"
truffle deploy --network="mainnet"
export OWNER_ADDRESS="0x1A447d5D190e4a7787B43A434BFaFbb4F8Ffb719"
export NFT_CONTRACT_ADDRESS="0x9d6c583Cf1FE009759024EDd96019aD832e74dD4"
node AutoriProvider.js
truffle deploy --network="mainnet"
truffle build
truffle compile
truffle deploy --network="mainnet"
truffle publish
curl -H 'Content-Type: application/json' \
      -X POST \
      -d '{"id":1, "jsonrpc": "2.0", "method": "eth_getBalance","params":["0x1A447d5D190e4a7787B43A434BFaFbb4F8Ffb719", "latest"]}' \
      https://mainnet.infura.io/v3/6c3cc2ec874b4e8e977bdcb0204f9220
./autorun.sh
apt-get install ipfs
curl -H 'Content-Type: application/json' \
     -X GET \
     -d '{"id":1, "jsonrpc": "2.0", "method": "eth_getBalance","params":["0x1A447d5D190e4a7787B43A434BFaFbb4F8Ffb719", "latest"]}' \
     https://ipfs.infura.io:5001/api
pkg update -y && pkg install proot wget tar pulseaudio  -y &&  wget https://raw.githubusercontent.com/AndronixApp/AndronixOrigin/master/Installer/Alpine/alpine.sh && chmod +x alpine.sh && ./alpine.sh
apk add wget && wget https://raw.githubusercontent.com/AndronixApp/AndronixOrigin/master/Installer/Alpine/alpine-mate.sh && bash alpine-mate.sh
apk add wget && wget https://raw.githubusercontent.com/AndronixApp/AndronixOrigin/master/Installer/Alpine/alpine-xfce.sh && bash alpine-xfce.sh
pkg install wget openssl-tool proot tar -y && hash -r && wget https://raw.githubusercontent.com/Techriz/AndronixOrigin/master/Installer/Parrot/parrot.sh &&  bash parrot.sh
apt install wget && wget https://raw.githubusercontent.com/Techriz/AndronixOrigin/master/APT/MATE/mate_de.sh && bash mate_de.sh
apt install wget && wget https://raw.githubusercontent.com/Techriz/AndronixOrigin/master/APT/XFCE4/xfce4_de.sh && bash xfce4_de.sh
pkg install wget openssl-tool proot tar -y && hash -r && wget https://raw.githubusercontent.com/Techriz/AndronixOrigin/master/Installer/Ubuntu/ubuntu.sh && bash ubuntu.sh
apt install wget && wget https://raw.githubusercontent.com/Techriz/AndronixOrigin/master/APT/MATE/mate_de.sh && bash mate_de.sh
apt install wget && wget https://raw.githubusercontent.com/Techriz/AndronixOrigin/master/APT/XFCE4/xfce4_de.sh && bash xfce4_de.sh 
curl -H 'Content-Type: application/json' \
      -X POST \
      -d '{"id":1, "jsonrpc": "2.0", "method": "eth_getBalance","params":["0x1A447d5D190e4a7787B43A434BFaFbb4F8Ffb719", "latest"]}' \
      https://mainnet.infura.io/v3/6c3cc2ec874b4e8e977bdcb0204f9220
./autorun.sh
apt-get install ipfs
curl -H 'Content-Type: application/json' \
     -X GET \
     -d '{"id":1, "jsonrpc": "2.0", "method": "eth_getBalance","params":["0x1A447d5D190e4a7787B43A434BFaFbb4F8Ffb719", "latest"]}' \
     https://ipfs.infura.io:5001/api
supervisorctl reload