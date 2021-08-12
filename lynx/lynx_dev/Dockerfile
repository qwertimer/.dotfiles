FROM debian
RUN apt update && apt install -y ca-certificates lynx
COPY lynx.lss lynx.cfg /etc/lynx/
ENTRYPOINT ["lynx","--useragent=\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_0) AppleWebKit/537.1 (KHTML, like Gecko) Chrome/21.0.1180.79 Safari/537.1 Lynx\""]
