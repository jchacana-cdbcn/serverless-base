FROM rupakg/serverless-docker
LABEL maintainer="Javier Chacana <javier.chacana@codurance.com>, Lau Llobet <lau.llobet@codurance.com>"

RUN apt-get update
RUN npm cache clean -f && \
	npm install -g n && \
	n stable
RUN npm install -g serverless && \
	npm --force install -g yarn

EXPOSE 8000
EXPOSE 3000
EXPOSE 3001

CMD ["/bin/bash"]
