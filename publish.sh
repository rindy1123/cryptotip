#! /bin/sh
rm -rf out/
bun run build
# cp  google96eac7d5349dafe6.html public/
ipfs add -r --cid-version 1 public
ipfs add -Qr --cid-version 1 --only-hash public | xargs ipfs pin add
echo "/ipfs/$(ipfs add -Qr --cid-version 1 --only-hash public)" | xargs ipfs name publish
w3 up public/
