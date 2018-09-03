var path = require("path");

/**
 * GET /r/a_trail_of_blood/15/4622/2
 *
 * user-agent: poketo/test (https://github.com/poketo/poketo)
 * accept-encoding: gzip,deflate
 * host: readms.net
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 03 Sep 2018 01:49:16 GMT");
  res.setHeader("content-type", "text/html; charset=UTF-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["__cfduid=d0979328a9a569a478787ee7e5264c3721535939356; expires=Tue, 03-Sep-19 01:49:16 GMT; path=/; domain=.readms.net; HttpOnly"]);
  res.setHeader("last-modified", "Thu, 12 Oct 2017 16:46:08 GMT");
  res.setHeader("expires", "Mon, 03 Sep 2018 02:49:16 GMT");
  res.setHeader("cache-control", "max-age=3600");
  res.setHeader("vary", "Accept-Encoding, User-Agent");
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "45448f12da4e938a-SJC");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA+w8+3PbNtK/56/YsJ1ampqiJFt+xJY6ebXJXJumZzfz9To3GohcirBAgAVAybqb/u/fLF+inrbSpKfvviozMQkC+wQWu4slr5+++vHl7S/vX0NkYzF4ck1/QDA57jsoHWpAFgyeAABcx2gZ+BHTBm3fSW3oXjjFI8utwMFzuNWMC1AhvBBKBdDpgQvv2RihCy78wOSYwY3VyOJrLx9SgyxZjH1nynGWKG0d8JW0KG3fmfHARv0Ap9xHN7s5Bi655Uy4xmcC+51W21kHFaDxNU8sV7IG7e/IAgg1IsQZPUoKLhEEnyC8Yzq16hheCGR+dAw/SoT3HH08hjeptKjhvrxgMiAAc4iVxlaJXXA5gUhj2HciaxPzzPNidu8HsjVSyhqrWUI3voq9UEnrshkaFaN32jpvtT3fmKXmVsxlyzfGAY2i7xg7F2giROsAlxbHmtt53zERO7k4dWfT8H+S35J//OPDT9/97ez2edR7/0F892P407s3N+pV9370+uufJu/vXz7/Vrx7jVP1+s3JjWgbPvrg//jTB/nOAV8rY5TmYy77DpNKzmOVGmfwpMZbRgj3SaI5m17IpnTf4r5ywM4T7Ds8ZmP07t28nzdYHW8ipa2fWtgbUAap/NWl7TFj0JpMhJleTTbNSHrfXF6eXHQuu+3Ty866JHPicgqfui68uf3h+x6YiMfHECoNb1+fuRdg0oQmJc3svAMKjFFaA647qAb/ykMQFt6+hst/Fq35DASj/QWNd8ajZdYzEZ+27owzuPbybiWkX1EGPPwngV6CkgvF4r317tiU5a0FB/SbcRmoWcuPk9sIY4Q+/HtJYCPmT8ZapTJ4BkdfhCf07+h4qUuiecz0nJ6fXJxf+v7m57d4bzMYYbjSwaCvZFCA6PV62x6XEPw1FMTf91xO6On5+fnK04BPeYC6HFo9+z2XVCXJ5ZlSV0O5ME1LcqtVwubZemSBcU9ad+abaf+s03G2CXtFV15uH58=", "base64"));
  res.write(new Buffer("XI9UMKe/AZ8CD/qORhagdiWblraBnviCGdN3JJuOmIb8jxtgyFJhy9t8ZE2t6yPdqN7nepRaq2RBcX7jrAywajwWCL4SgiUGAwcCZlnR3HfK9rKZ6THZ+C9i4+YAHGCaMxfvEyYDDPpOyITBOpEmYbJEarSrpJg7g9scrWRTPmZkiK896rdlGC1zl5ANPl+3ay8XUHHHVuQ00kwGlUmioWzw5NoL+LRUbtG/lFiptYUESfsLuRV4UlFDVI5ZTI7CnA2u2QL1GxUjob/2BF/qVUIKtEoCNZM1GAVPOYwvnNWehb5XlL+Ak+2N+TZ9Pao4ZRqziT/KpbGEa8FXhSNGma6QtM5eZqM9Zi3zJ0Mlh5ZbJp3B86wBlIRbalhnfxe0EWqDeuIMXuQX+40ONBsrORwxIYYmTWh1vcqa4AUTAm6oaT+IEeOTeZo6gzf5xdOn+46/4zEOpRryJFEEhu5BKnibJGo/WPF8GKFWQ+azAGPOnMEPc3iDWsHzomU/eEriMCHPyBlUTtLeEJJU+tEwJsVnQOiWpt9+gCROUQtatoP3WsXcYADvyrb9QJlITdIxTjgJ3ag0Zs7gpmwjwd9Q234wbYRDg1OUwwBZIOZDw6VxBrcRwg01w6usGW64NHtCVpO5Go4jlQqNZGsncwXf0e0zvVsZ1ZrNN1Pn8UidwbepEPA9N3YzhmsvFTVrtWq7avAKj9xjSSK4n+0OZIF8nXJLvtVG27dhvK+E0s7gJf3Jgo0VMS4o2mqFq62XjyO71SQXTmAmr0qEIYOQuSPrkxD5AF4pyexuu81SG7njFI1dMcSxCphY3YKFGnPp5o8WxCxckmdXzuB76vMJcWocc2NRP4D270W3R+1SkJFA/6G0pG8M1jeuYgysbVjVjrZl51ra+YepQU0xYLX1f+7tzKC1XI6NM7gprh65lJcEWuIWaqxSm6lVpR+3zpb0PkXNQ75J3juIkMrysFiXpRo2MLO6EFAIV8HSYGor/MeIBwHKvmN1ivmCWYeI8UYSfJXKTG8Yr0qCbRJELqDcdcsiO68l2bTy0xaBW+7cbfLxYsalS449JUJq7SYdbfbr8wfuTLMk2erCk93SSphVbdS6jKx0KVBLgK6KUMKPWGKXoK4vnJGV2ZAypHik41ctr3XYa251rkL33kBxZWJnLfNTLrtO70F41XpcduU3avcj1um+v+V1rT02tMTZUIXDEXHmnZx6ve75hddZMTqVXJzBySm48HzEZFAFPEtdp9zwkcCib9ljq8H4lL+H2Tvxet1ebyd7J+DCWwiUPLIgEQOYq/RBPk8OjM+u1+t2Ozv5pKTlB8V9BC7BRgg24v4E7YO8dg+M147X65x3d/LaoSmrFXm3DzDXOTDm2l6v09utyDZNWBlggjJASZHKAzy2D4vH7qXX63R2LsruJSkwpNT0jR8pJeB5oAQan/j95iGGu5cHxvCF12uf7TSy3QtiGAyXlGEyFpMHmbw4MCbPvV67197J5Dm48Eop/SBv5wfG25nXa3d3mpzuGbjwAqUfPcjc2YEx1/N67fbZTubo5Oul5hTpCHiv0ZhUP2h3ur3PwujjI37YlqhbEcGDaQBYC1Fg4WsvNT3k9iZsjI/yeYujiU/k8xanlpvkc8De62eb8p2ed3qWr+dvuTY2l0+j0/xzluTedHadQa7BA6XvpKDv5EDpOy3oOz1Q+noFfb0Dpe+soO/sQOk7L+g7P1D6Lgr6Lg6UvsuCvssDpa/TLgjstA+Vwk5JYedQKSw3kc6h7iKdchvpHOo+0ik3ks6h7iSdcivpHOpe0ik3k86h7iadcjvp/Mn7yV+//w==", "base64"));
  res.write(new Buffer("7t/j/f0zZ/A9q+KS7tmegcmDserq7SKGowBV74jdatF3onHKs5rKxwZbXwmm9RUlEKb7r6waZon31nl0aPIO7y18pQn1bqy1s/XlYzRYCe1jwyA2zD3vXgwv22WRFCuDfGZDCqIrEdOB3SYYbu0MviLoDbMILDAwSi0Yy4WAGZMWrIIIRQKp+QZeoK9iBAYbj/OrS+L26ZMVfWd1mHVCtJq5oUh5AKT77Lhvw2HglsQF1E9eH9DDNY/HuagoC5OnQqAoJvV4PG4tlbqq2PMDWWRsOqeXOZh2h7XukjGVzy5lIzYTtkFlJ+328Ky9rjPDA1xS2spS2XiiumUahEpRucGoNg2ebKudHaVcBCt1sw9VyH7ZcL6oybDZUhIbjlAscI4hTKVPR8yNZlEvO2UaVBgatNCHLxtHtaFHzVb+pNFsCQwtfL3eIStRbzTha+i0r5783mxRMXljDQsPGzbihvSWCLTYhC+zhmaL6Go0aejVkydfNvKy3mZLo+H/wsZGcmebKC0Iufr0TK3ibZWH2qtYV54xa3XjKCu/Pjo+ipmm2hZC+cw9+rox87rNr4+S+6OSd9Jbqzhtb7YSLiUGjZzpEZUxm2dw2j4Gz4NZhJIW/Chf58ZyfzLPOhpfKyG4HD+DvGuiDCf5QZBqLsdFh6xvrEZc4DPIilupr6FqqqAq/86f57TVSo2XZjhVzEDIAnTAshGXAd73HZcqz1WWf+RMqHE+85dKe9bNHbW7Zf9itPJTqo3aUlqQDykKo3bUF+T9otVC46rrroJiX6iqTjjgJuYVwKLGQ7AR1di/zPoVue4NxR9fWR6juaoS3vWy3CViotNlsrMXR7LiGHoLQuX1qvlbJcD8rEzk2otO98o855CLUo81CpKqpFiGaotJf5WdhkdsikD85nTAHO032+psFjPAKresuHIGLzXSfqZkVkQGUs2Ogdsjk7+zQq+d/JZyf/J0Q645WSl7z1pDpeNaYRGXLrU4INWUCR4wi1RoU15v27BqsqLheZp+p9NDs4DeoOg7GDMunMFr+nPtZQ92DOQySUtDno9cQlwYk7r4il6JYD5GSgSo+84vKtVQChUDyPoACwI6iaG3QH5LObV7Oyip5/kLTForvYbaLaE5gwxtjoubCssxJAKZQQjJN1HEXsQNhBxF0Np2dLBl1n4SjSTMmJnSVDFbXO2nl2r8Q6pZdFzSzvuq+VMpokRU00WJ5FNq4kFVbJsnWUNW9JvNDq+kl0pnAGU+SQOFhqxIzKwfAZNzG9EGxSXks9lXOjDH4EfoT2ighgAt48K0dpK3ZM1NOoq5dbYUjNVpHllZWtmFdd7tzu4wcKHSY2WdwVvIryCeQ1JNvk2nZB5Nqo1WfKsZx3tLhZ9i53nhWKmxQFcwKjfPqVxp2lTrulromA8pin6/y242s8EW43wcKTXZC005qED0bXH7ACo745b86X0wFWMKRLf53XqF7NaoeNnr/1iXaLXy+C+vaD+v6HnheOSl2bp45+pP94Z+YBOyXDVPSMklR42MLqVryJ9BZuYtyLbOsrdAazLT6KuYNEvDNWam28BXLE6uQOLMHG9ETjCzsUySAz/LTWXpw4/mYNIRrYMRkdhggZt5VjXqnjZb8FxQmDtf9eh2enPV5LXKzQyfMyi2G5GZ0awcALg0FlnQeqwDt3ijsIC+w8rR7xeVAtMIbJTtbwqy12QZ7XSaMhbazsEonzMBMQacVUK3ChiJdZNH3YIfpY8kyY04YzbBrEKy6H5cKSA1WMh/C8pCNCQVJq2Yl7WWYWpTjS14G27FypZ0tIns4xI8zYlMDgR6IymhVnFBaQ==", "base64"));
  res.write(new Buffer("UcK/SUObt9klJ7vS05/tZy/eevi5uNrPq6O0yRaPLmb3AuXYRn2ne5FP9grbsmv3Ck3mz5WPoZGkI8F9MQd6tZ+NBDY/wu1bTP6Fa1WicFPJfyPjeRsxu0DMTTVBLJugbMH7fDFSeaShWRBj7mAFPAxRo7Q7XcD9aFr4oT/XCPrDfuh+RIxtbTJAnBoLIwRG9pWM70n2NQfmW9QGhJLjT4haLKH2mZQqQ06fSwAbMQndi8+InokkYjKNl2mgjz3Ms09BMLIJRR/U3K+T0mDuvzKD0XYvm/+R+OzzRcybYuUPZJM+KkKuXAHKs7sjofwJvQsyrQGsTXpozFV6JARNA0ObOoP8zaT8DZ/MPpO8kz8wAfKAfMkgVHSU1oCZbAOwGMCM2wjYwgBU290fnomrmYGtUvn/mBz49GmBTSr43DmB/YjIbHGFf80W72cMP7fuh76SYY3cl0qGXMdFOPGZZkOOdPOUgAYbMy6bn3pqxNxk2ZY8N1M2m5W0TJWU+fgc0d5JmIrsLA9TZIWfl/ntrXHh9qzJZ4vZ84TOXxH7H4vYKb03RT3/D0TreYi1I4zKTtZp855ikb6zKPNgqVwylRXNVk3+LN/rRijUbGugPkPyCAwWMTs55VksqNPskNNQiFiIBrhtfcypRzE//3uOPQqG/oxzjxLVwnTWkX/2k49PZEsLmjNL+gLHXNZW2wFaUpP6Phrzl0X9P2tRv6Pt+ikZVrsIQTIPAs32rOgx4H2Cvi1sHvLMHsdoDBW1ZQmq1BT5sY1oqcoLQpxBzGVq0eTxTZhqG5H5rJnVLYb0YyY7tdQ+fLb00QYTsUDNqpqezZ1G6n5L1U/5qTaWcNPKT1yyMqc7Q03PfMEpabOxFCinq/giXjh6bubSfys5Fb+sFdDQ79sXLfqmZGP5i3ksSd4G+eUzOOpcnJ+d9s4vT3rn7d5p73Tl03S+UhOORWeaysuP78NRLGDr4ylqQ1FwjmrabV3UPm5XVNP8nv9ZlAAFx2COgQfNBdlUlXNnjiG8M9CHoDVG+7r4WOGL+S0bv2MxNkzz1/Y/r6oxPIRGveeL+dugwYNmE/6t0aZaXv1e9S3A+plDWvRvmOYV3JkWD6APPLiqdW4Z7UMfKlX6Skr0bas82GpJtB7K4c83ngkmpMvF6PDOtBJGcfk7FWCLS4PavsBQaWwULJaCaZT27xiO8glwdAxH1ZHbnTHB5KjZvHqyXjO2Wl82RRkoTV8CrH84cvDwQJYkjxi16yOOBIGCIE6VfVwOUy2gD0fe0dXq47wGb0cHlvDyaW0VrRUMrg/kZpiXOdFKoTqoRY8cab5OjnYWrpLwd9Y2UolXUSBWaq6ZwZ9XkxuW1icVkq282XnUrFrKcrPflzS8KEH08s8zXnv5Z27/FwAA//8DAB87RIH3VgAA", "base64"));
  res.end();

  return __filename;
};