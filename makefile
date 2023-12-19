# Makefile for compressing directory and transferring to remote server

#
SRC_DIR = public
TAR_FILE = public.tar
NGINX_DIR = /usr/share/nginx/
REMOTE_SERVER = root@solar.bestow.site

#
all: build tar scp ssh clean
#
build:
	hugo --baseURL="/"
#
tar:
	tar -cvf $(TAR_FILE) $(SRC_DIR)

#
scp:
	scp $(TAR_FILE) $(REMOTE_SERVER):$(NGINX_DIR)

#
ssh:
	ssh $(REMOTE_SERVER) "cd $(NGINX_DIR)&&tar -xvf $(TAR_FILE)&&rm $(TAR_FILE)&&rm -rf html&&mv $(SRC_DIR) html"

#
clean:
	rm -f $(TAR_FILE)

# PHONY
.PHONY: all build tar scp ssh clean
