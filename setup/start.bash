#!/bin/bash

sudo nohup node "webpage2/app.js" "/etc/letsencrypt/live/magenta.link/privkey.pem" "/etc/letsencrypt/live/magenta.link/cert.pem" &> nohup.out &