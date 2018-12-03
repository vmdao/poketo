var path = require("path");

/**
 * GET /manga/hanebado/c026/chapterfun.ashx?cid=565986&page=19&key=24716494127b706f
 *
 * user-agent: poketo/test (https://github.com/poketo/poketo)
 * referer: http://localhost:57171/manga/hanebado/c026/
 * accept-encoding: gzip, deflate
 * host: fanfox.net
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 03 Dec 2018 01:43:02 GMT");
  res.setHeader("content-type", "text/plain; charset=utf-8");
  res.setHeader("content-length", "745");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["__cfduid=df6211d1a4a251ad461a2fba49b2807ec1543801382; expires=Tue, 03-Dec-19 01:43:02 GMT; path=/; domain=.fanfox.net; HttpOnly","image_time_cookie=565986|636794269828915547|0; domain=fanfox.net; expires=Mon, 03-Dec-2018 03:43:02 GMT; path=/","dm5imgpage=565986|19:0; domain=fanfox.net; expires=Tue, 04-Dec-2018 01:43:02 GMT; path=/","SERVERID=node2; path=/"]);
  res.setHeader("cache-control", "private, max-age=600");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("last-modified", "Mon, 03 Dec 2018 01:43:02 GMT");
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("x-aspnet-version", "4.0.30319");
  res.setHeader("x-powered-by", "ASP.NET");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-allow-headers", "*");
  res.setHeader("access-control-allow-methods", "GET, POST, PUT, DELETE");
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "48325712bb7da5ba-NRT");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAEAO29B2AcSZYlJi9tynt/SvVK1+B0oQiAYBMk2JBAEOzBiM3mkuwdaUcjKasqgcplVmVdZhZAzO2dvPfee++999577733ujudTif33/8/XGZkAWz2zkrayZ4hgKrIHz9+fB8/IvLLrNw6Xy+nbVEtt1ajbDQdvR3lo9mdX5x/Zj+f3vnFdd6ua/rtcfZ7fPTRo3xrldVNfrZst6Z3szt37nyytTX9bPq7Z3eO7t3/PV63dbG8GJ/X1eJkntUn1Szfmn6y9/DOo+m4reTbrXuf3rnzSw6L863f9eOPx3W+KrNpvnX397s7ku/v3PnFV/OipBe3t+/Mvkc/73z/s7ffm37/Z34Gvx++/ex7Fr3coJdSw+//ku8feqibrz7+fX/fq08+/iWH0892D3/JoQNNCADqndVnK4vFMr9KX+UXp+9WW/Ta5ONPqOmdT/jX0ccXH98Z8RuHAjhdHf6SrY/b9Jy62kvzzz5aPrp7txk/GN8=", "base64"));
  res.write(new Buffer("u7t/9/7dT+9Ot+fjnbsXHx3upbuffe+ju4vxw9/j4LPqF04+yz4afXS35D/f8p/fP1xv7aXFZzuHxePd8eqw+OSTO7/4F20Vn322c+cX736v+P5nH8Vhf4IvD+tfgh+f5fzXL/npdPeX7KWzw9lnhNrhx6N7u/jfxz+zoilf5z9zmdU/s8zbn2naqs5/ZpEtL7Kf2f300517P3OeLc+rdz/TVm/z5c/89OriZ3bv7987uL93sLPzM21b/szOpz/zM6vi3c/MFveLRXaRE61/ZlotVnXeNPnsZ3b26Huhzc/kD6Z7s539+/f2s/P8fjY92N2/tzeb7eb39vbvPZx8+um9+zvnBw8Jm53dh/jn4Gfmbbv6mb0H97OdnQNq9mBvdz/bnezv5fv3d6cH2e7OLN/J7t3fz/cPCNcyX160858pzgmDZVssaWA/Q/jw3P/MeVV/PG5WZdFuffwzNG07o1/8S+7cSf4f8Sp4TvQCAAA=", "base64"));
  res.end();

  return __filename;
};