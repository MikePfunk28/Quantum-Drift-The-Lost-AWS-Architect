#!/usr/bin/env python3
"""
Simple HTTP server for the Quantum Drift game
Serves static files with proper CORS headers
"""

import http.server
import socketserver
import os
import sys
from urllib.parse import urlparse

class CORSHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

def main():
    port = 12000
    
    # Change to the game directory
    game_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(game_dir)
    
    print(f"Starting Quantum Drift server on port {port}")
    print(f"Serving files from: {game_dir}")
    print(f"Game URL: http://localhost:{port}")
    print(f"External URL: https://work-1-eyldxomwxpzwinod.prod-runtime.all-hands.dev")
    print("\nPress Ctrl+C to stop the server")
    
    try:
        with socketserver.TCPServer(("0.0.0.0", port), CORSHTTPRequestHandler) as httpd:
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")
        sys.exit(0)
    except Exception as e:
        print(f"Error starting server: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()