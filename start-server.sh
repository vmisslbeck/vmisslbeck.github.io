#!/bin/bash

# Lokale IP-Adresse ermitteln
IP=$(hostname -I | awk '{print $1}')
PORT=8080

# Server starten im Hintergrund
echo "Starte lokalen Server auf http://$IP:$PORT ..."
http-server -a 0.0.0.0 -p $PORT &

# Warten, damit sichergestellt ist, dass der Server läuft
sleep 2

# ngrok starten
echo "Starte ngrok Tunnel..."
ngrok http $PORT
