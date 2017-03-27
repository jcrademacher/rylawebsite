from BaseHTTPServer import BaseHTTPRequestHandler,HTTPServer

class myHandler(BaseHTTPRequestHandler):
	def do_GET(self):
		self.path = self.path[self.path.rfind("/"):] # gets trailing path item after '/', so that files can be accessed

		if self.path == '/':
			self.path = '/index.html'
		if not self.path.endswith('.html') and not self.path.endswith('.js') and not self.path.endswith('.jpg') and not self.path.endswith('.png'):
			self.path = '/index.html'

		if self.path.endswith(".html"):
			mimetype = 'text/html'
		if self.path.endswith(".js"):
			mimetype = 'application/javascript'
		if self.path.endswith('.jpg'):
			mimetype = 'image/jpg'
		if self.path.endswith('.png'):
			mimetype = 'image/png'

		f = open("." + self.path)

		self.send_response(200)
		self.send_header('Content-type',mimetype)
		self.end_headers()

		# Send the html message
		self.wfile.write(f.read())
		f.close()

try:
	#Create a web server and define the handler to manage the
	#incoming request

	server = HTTPServer(("localhost", 8080), myHandler)
	print 'Started httpserver on port ' , 8080

	#thread.start_new_thread(updateClock, ())

	server.serve_forever()


except KeyboardInterrupt:
	print '^C received, shutting down the web server'
	server.socket.close()
