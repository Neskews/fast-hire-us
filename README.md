# Roadmap
## Version 0.1
[x] Create a request
[x] Create a band
[x] Assign request and band
[x] Prevent duplicate assignments
[ ] Enable views
[ ] Create basic identification for band
[ ] Create basic identification for request
[ ] Save credentials as cookie
[ ] Show request to band
[ ] Let the band make an offer
[ ] Let the cusomter accept the offer

# MongoDB
See https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/

## Operations
Start:
`sudo systemctl start mongod`

Stop:
`sudo systemctl stop mongod`

Restart:
`sudo systemctl restart mongod`

## URI
The URI is stored in `.env` in as `MONGODB_URI`

# Contexts
There are following contexts:
- `assignment`: Assign bands and requests to each other
- `request`: Create and read requests
- `band`: Create and read bands