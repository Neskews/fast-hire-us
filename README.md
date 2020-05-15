# Roadmap
## Version 0.1
[x] Create a request
[x] Create a band
[x] Assign request and band
[x] Prevent duplicate assignments
[x] Enable views
[x] Create basic identification for band
[x] Create basic identification for request
[ ] Save credentials as cookie
[ ] Show request to band
[ ] Let the band make an offer
[ ] Let the cusomter accept the offer

## Version 0.2
[ ] Add password for band authentication

# MongoDB
See https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/

## Operations
Start:
`sudo systemctl start mongod`

Stop:
`sudo systemctl stop mongod`

Restart:
`sudo systemctl restart mongod`

Status:
`sudo systemctl status mongod`

## URI
The URI is stored in `.env` in as `MONGODB_URI`

# Contexts
There are following contexts:
- `assignment`: Assign bands and requests to each other
- `request`: Create and read requests
- `band`: Create and read bands
- `auth`: Basic authentication system

# Colors
- Primary: #1e88e5
- Light: #6ab7ff
- Dark: #005cb2