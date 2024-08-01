## Getting Started Locally

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


Ubuntu EC2 instance prep
sudo apt-get update
sudo apt-get install docker.io -y

sudo systemctl start docker
sudo docker run hello-world

sudo chmod 666 /var/run/docker.sock
docker ps

docker --version

sudo systemctl enable docker
sudo usermod -a -G docker $(whoami)
newgrp docker

# runner stuff
sudo ./svc.sh install
sudo ./svc.sh start
