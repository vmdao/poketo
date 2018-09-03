var path = require("path");

/**
 * GET /r/a_trail_of_blood/15/4622/9
 *
 * user-agent: poketo/test (https://github.com/poketo/poketo)
 * accept-encoding: gzip,deflate
 * host: readms.net
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 03 Sep 2018 01:49:17 GMT");
  res.setHeader("content-type", "text/html; charset=UTF-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["__cfduid=dd6e1d3b58b07d6010afe0fda7d21cdd91535939356; expires=Tue, 03-Sep-19 01:49:16 GMT; path=/; domain=.readms.net; HttpOnly"]);
  res.setHeader("last-modified", "Thu, 12 Oct 2017 16:46:08 GMT");
  res.setHeader("expires", "Mon, 03 Sep 2018 02:49:17 GMT");
  res.setHeader("cache-control", "max-age=3600");
  res.setHeader("vary", "Accept-Encoding, User-Agent");
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "45448f137cdc93d2-SJC");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA+w8a3PbtrLf8ys2bKeWpqYoyZYfsaWO82oyp03TEzdzezodDUQuRUQgwAKgZJ0z/e93li9RT1tp0urcW2cmIkFgn8DuYrHk9ePnPzy7/fntC4hsLAaPrukHBJPjvoPSoQZkweARAMB1jJaBHzFt0Pad1IbuhVM8stwKHNzArWZcgArhqVAqgE4PXHjLxgiX4ML3TI4ZvLMaWXzt5UNqkCWLse9MOc4Spa0DvpIWpe07Mx7YqB/glPvoZjfHwCW3nAnX+Exgv9NqO+ugAjS+5onlStag/RNZAKFGhDijR0nBJYLgE4Q3TKdWHcNTgcyPjuEHifCWo4/H8CqVFjXclRdMBgRgDrHS2CqxCy4nEGkM+05kbWKeeF7M7vxAtkZKWWM1S+jGV7EXKmldNkOjYvROW+ettucbs9Tcirls+cY4oFH0HWPnAk2EaB3g0uJYczvvOyZiJxen7mwa/k/yW/Kvf73/8dt/nN3eRL2378W3P4Q/vnn1Tj3v3o1efP3j5O3ds5uX4s0LnKoXr07eibbho/f+Dz++l28c8LUyRmk+5rLvMKnkPFapcQaParxlhHCfJJqz6YVsSvct7isH7DzBvsNjNkbvzs37eYPV8SZS2vqphb0BZZDKv7q0PWYMWpOJMNOryaYZSe+by8uTi85lt3162VmXZE5cTuFj14VXt99/1wMT8fgYQqXh9Ysz9wJMmtCkpJmdd0CBMUprwHUH1eBfeAjCwusXcPlr0ZrPQDDaX9D4wXi0zHom4tPWB+MMrr28WwnpF5QBD38l0EtQcqFYvLPeBzZleWvBAf3NuAzUrOXHyW2EMUIf/rMksBHzJ2OtUhk8gaMvwhP6d3S81CXRPGZ6Ts9PLs4vfX/z81u8sxmMMFzpYNBXMihA9Hq9bY9LCP4aCuLvOy4n9PT8/HzlacCnPEBdDq2e/Z5LqpLk8kypq6FcmKYludUqYfNsPbLAuCetD+abaf+s03G2CXtFV15uHx8=", "base64"));
  res.write(new Buffer("XY9UMKffgE+BB31HIwtQu5JNS9tAT3zBjOk7kk1HTEP+4wYYslTY8jYfWVPr+kg3qve5HqXWKllQnN84KwOsGo8Fgq+EYInBwIGAWVY0952yvWxmekw2/ovYuDkAB5jmzMW7hMkAg74TMmGwTqRJmCyRGu0qKebO4DZHK9mUjxkZ4muP+m0ZRsvcJWSDz9ft2ssFVNyxFTmNNJNBZZJoKBs8uvYCPi2VW/QvJVZqbSFB0v5CbgWeVNQQlWMWk6MwZ4NrtkD9SsVI6K89wZd6lZACrZJAzWQNRsFTDuMLZ7Vnoe8V5S/gZL4xd9PXo4pTpjGb+KNcGku4FnxVOGKU6QpJ6+xlNtpj1jJ/MlRyaLll0hncZA2gJNxSwzr7u6CNUBvUE2fwNL/Yb3Sg2VjJ4YgJMTRpQqvredYET5kQ8I6a9oMYMT6Zp6kzeJVfPH687/gPPMahVEOeJIrA0D1IBa+TRO0HK54PI9RqyHwWYMyZM/h+Dq9QK7gpWvaDpyQOE4qMnEEVJO0NIUmlHw1jUnwGhG5p+u0HSOIUtaBlO3irVcwNBvCmbNsPlInUJB3jhJPQjUpj5gzelW0k+HfUth9MG+HQ4BTlMEAWiPnQcGmcwW2E8I6a4XnWDO+4NHtCVpO5Go4jlQqNZGsncwXf0u0TvVsZ1ZrNnanzcKTO4GUqBHzHjd2M4dpLRc1ardquGrwiIvdYkgjuZ96BLJCvU24pttpo+zaM95VQ2hk8o59ss7EixgVFW61w5Xr5OLJbTXIRBGbyqkQYMgiZO7I+CZEP4LmSzO622yy1kTtO0dgVQxyrgIlVFyzUmEs3f7QgZhGSPLlyBt9Rn0+IU+OYG4v6HrT/LLo9yEtBRgL9h9KSvjFYd1zFGFhzWJVH2+K5ljz/MDWoaQ9Yuf7P7c4MWsvl2DiDd8XVA5fykkBL3EKNVWoztar049bZkt6nqHnIN8l7BxFSWR4W67JUwwZmVhcCCuEqWBpMbUX8GPEgQNl3rE4xXzDrEDHeSIKvUpnpDeNVSbBNgsgFlIdu2c7Oa0k2reK0xcYtD+42xXgx49KlwJ4SIbV2k442x/X5A3emWZJsDeHJbmklzKo2al1GVrq0UUuAroqthB+xxC5BXV84IyuzIeWW4oGBX7W81mGvhdW5Ct07A8WViZ21zE+57Dq9e+FV63E5lN+o3Y9Yp/v+La9r7bGhJc6GKhyOiDPv5NTrdc8vvM6K0ank4gxOTsGFmxGTQbXhWeo65YaPBBZ9yx5bDcan/LufvROv1+31drJ3Ai68hkDJIwsSMYC5Su/l8+TA+Ox6vW63s5PPLrjwXnEfgUuwEYKNuD9Bey+v3QPjteP1Oufdnbx2aMpqRdHtPcx1Doy5ttfr9HYrsk0TVgaYoAxQ0k7lHh7bh8Vj99LrdTo7F2WXMuw3IaWm3/mRUgJuAiXQ+MTvN/cx3L08MIYvvF77bKeR7V4Qw2C4pAyTsZjcy+TFgTF57vXavfZOJs/BhedK6Xt5Oz8w3s68Xru70+R0z8CFpyj96F7mzg6MuZ7Xa7fPdjJHJ1/PNKedjoC3Go1J9b12p9v7LIw+fMcP2xJ1KyK4Nw0Aa1sUWMTaS033hb0JG+ODYt7iaOITxbzFqeUm+Rxw9PrZpnyn552e5ev5JdfG5vJpdJp/zpL8y/k+dQYZx6d/Lr8Ppq9X0Nc7UPrOCvrODpS+84K+8wOl76Kg7+JA6bss6Ls8UPo67YLATvtQKeyUFHYOlcJuSWH3UCk8KSk8OVQKS0fSOVRP0ildSedQfUmndCadQ/UmndKddA7Vn3RKh9I5VI/SKV1K51B9Sg==", "base64"));
  res.write(new Buffer("t/Qp3UP1Kd3Sp3QP1ad0S5/SPVSf0i19SvdQfUq39Cnd0/+e3djDuTtzBt+xasfZPdtzy3lvFmL1drE7p9SD3rErr+VVEo1TnlXLPjSc/0owra8oNTTdX2s1zBLvrPPwIPgN3ln4ShPu3WhrZRPLJ6SwkrWJDYPYMPe8ezG8bJf1b6zM3zAbUn6kkjGdxW6C4dbKKyqCXjGLwAIDo9SCsVwImDFpwSqIUCSQmm/gKfoqRmCwsVKjuiRuHz9aUXhWYlsnRKuZG4qUB0DKz05yN5zzbslJQf1Q/T5FXPN4nMuKMmx5mguKQmGPx+PWUhmzij0/kEU2rnN6mcNpX7QSOabK6KVE02bCNqjspN0enrXXdWZ4gEtKW1krGw/Lt0yDUCmqJBnVpsGjbWXRo5SLYKUk+r7i5y8bzhc1ETZbSmLDEYoFzjGEqfSpeqDRLEqhp0yDCkODFvrwZeOoNvSo2cqfNJotgaGFr9c7ZG8fNJrwNXTaV49+b7boPYHGGhYeNmzEDaktEWixCV9mDc0W0dVo0tCrR4++bOQV282WRsP/jY2N5M42UVoQcvXpmVrF2yrrFVaxrjxj1urGUVZZf3R8FDNNZUuE8ol79HVj5nWbXx8ld0cl76S3VlFI0WwlXEoMGjnTI6pQN0/gtH0MngezCCUt+FG+zo3l/mSedTS+VkJwOX4CeddEGU7ygyDVXI6LDlnfWI24wCeQ1S1TX0OFckFV2Z8/z2mrVZEvzXAqhoKQBeiAZSMuA7zrOy69VKCy1DJnQo3zmb9UtbVu7qjdLfsXo5WfUtnblqqRfEhR87ajdCTvF63WkFddd9WK+0JVJeABNzGvABblO4KN6PWJZ1m/4hhjQ13PV5bHaK6qs4x6xfUSMdHpMtnZO0FZ3RO94KLyUuT8hSFgflYBdO1Fp3sdKuSQiyqeNQqSqlpchmqLSX+eFTpEbIpA/OZ0wBztN9tKqBYzwCq3LKZzBs80kj9TMqsPBKlmx8DtkclfR6I3in5LuT95vOEYIVl5oyFrDZWOazVjXLrU4oBUUyZ4wCxSDVV5vc1h1WRFw/MTmJ1RD80Cejmm72DMuHAGL+jn2sse7BjIZZKWhjwfuYS4MCZ18RW9EsF8jJQIUPedn1WqoRQqBpD1ARYEdMhGL/j8lnJq93ZQUj/CKTBprfQaareE5gwytDkubiosx5AIZAYhpNhEEXsRNxByFEFr26nQlln7STSSMGNmSlMxdHG1n16q8fepZtFxSTtvq+ZPpYgSUU0XJZJPqYl7VbFtnmQNWT13Nju8kl6qigKU+SQNFBqyIjGzfgRMzm1EDopLyGezr3RgjsGP0J/QQA0BWsaFae0kb8mam3QUc+tsqQWs0zyysrSyC+u8O5zdYeBCpcfKOoPXkF9BPIekmnybDkA9mlQbrfhWM453lmp6xc6j4LFSY4GuYPQmQU7lStOmMubVGtZ8SFHP/W12s5kNthjn40ipyV5oykEFopfF7T2o7Ixbiqf3wVSMKRDd5nfrxc9bt8XLUf/HhkSrReV/R0X7RUU3ReCRV93r4nW6Pz0a+p5NyHLVIiEllwI1MrqUr6F4BpmZtyBznWVvgdZkptFXMWmWhmvMTLeBr1icXIHEmTneiJxgZmOZpAB+lpvKMoYfzcGkI1oHIyKxwQI3i6xq1D1utuBG0DZ3vhrR7YzmqslrlZsZPmdQuBuRmdGs0gO4NBZZ0HpoALd4WbSAvsPK0d/PKgWmEdgo828KsjegGXk6TRkLbedglM+ZgBgDziqhWwWMxLopom7BD9JHkuRGnDGbYFb8WnQ/rhSQGizkvwVlIRqSCg==", "base64"));
  res.write(new Buffer("k1bMyzLaMLWpxha8DrdiZUs62kT2cQme5kQmBwK9kZRQq7igtHg7Y5OGNrvZpSC70tOfHWcvXmj5qbjaL6qjtMmWiC5mdwLl2EZ9p3uRT/YK23Jo9xxNFs+Vj6GRpCPBfTEH+moDGwlsfkTYt5j8i9CqROGmkv9GxvM2YnaBmJtqglg2QdmCt/lipMpXQ7MgxjzACngYokZpd4aA+9G0iEN/qhH0h+PQ/YgY29pkgDg1FkYIjOwrGd+T7EMdzLeoDQglx58QtVhC7TMpVYacvoQBNmISuhefET0TScRkGi/TQN/xmGdf+WBkE4o+qLlfJ6XB3H9nBqPtXjb/kv3Z59sxb9orvyeb9FE75CoUoDy7OxLKn9BrPtMawNqkh8ZcpUdC0DQw5NQZ5C+d5S9vZfaZ5J38gQmQb8iXDEJFR2kNmMkcgMUAZtxGwBYGoHJ3f3gmrmYGtkrl/2Ny4NOnBTap4HPnBPYjIrPFFf41W7yfMfzcuh/6SoY1cp8pGXIdF9uJzzQbcqSbpwQ02Jhx2fzUUyPmJsu25LmZstmspGWqpMzH54j2TsJUZGd5mCIrfFPmt7fuC7dnTT7bnj1P6Py9Y/9jO3ZK701Rz/+C3Xq+xdqxjcpO1sl5T7FI31mU+WapXDKVFc1WTf4s93UjFGq2daM+Q4oIDBZ7dgrKs72gTrNDTkNbxEI0wG3rY049ivn5f+fYo2Dozzj3KFEtTGcd+Wc/+fhEtrSgObOkT3HMZW21HaAlNanvozF/W9T/Wov6Lbnrx2RY7WILkkUQaLZnRY8B7xL0bWHzkGf2OEZjqKotS1ClpsiPbURLZV4Q4gxiLlOLJt/fhKm2EZnPmlndYkg/ZrJTS+2bdkvf4zARC9SsqunZ3Gmk7rZU/ZRf4WMJN638xCWrcvpgqOmJLzglbTaWAuV0FR87DEc3Zi7915JT8ctaAQ39vXzaos+FNpY/hsiS5HWQXz6Bo87F+dlp7/zypHfe7p32Tle+OugrNeFYdKapvPz4LhzFArY+nqI2tAvOUU27rYvadwuLaprf859FCVBwDOYYeNBckE1VOR/MMYQfDPQhaI3Rvii+Q/l0fsvGb1iMDdP8pf3rVTWGh9Co93w6fx00eNBswn802lTLq9+rvgVYPwtIi/4N07yCD6bFA+gDD65qnVtG+9CHSpW+khJ92yoPtloSrYdy+NM7zwQT0uVidPjBtBJG+/I3KsAWlwa1fYqh0tgoWCwF0yjt3zEc5RPg6BiOqiO3D8YEk6Nm8+rRes3Yan3ZFGWgNH3ksf5N0MH9A1mSPGDUru9zEgTaBHEq7ONymGoBfTjyjq5WH+c1eDs6sISXT2uraK1ecH0gN8O8zIlWCtVBLXrkSPN1crSzcpWEv7u2kWq8igqxUnXNDMG8mt2wtECpkmzlrd2jZtVS1pv9vqTiRQ2il39689rLP2H8vwAAAP//", "base64"));
  res.write(new Buffer("AwAbaUsI01gAAA==", "base64"));
  res.end();

  return __filename;
};