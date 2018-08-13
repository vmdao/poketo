var path = require("path");

/**
 * GET /r/a_trail_of_blood/15/4622/26
 *
 * user-agent: got/8.3.0 (https://github.com/sindresorhus/got)
 * accept-encoding: gzip,deflate
 * host: readms.net
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 13 Aug 2018 04:05:21 GMT");
  res.setHeader("content-type", "text/html; charset=UTF-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["__cfduid=de2d453ee4d4857daf50a34ffa91ce4201534133121; expires=Tue, 13-Aug-19 04:05:21 GMT; path=/; domain=.readms.net; HttpOnly"]);
  res.setHeader("last-modified", "Thu, 12 Oct 2017 16:46:08 GMT");
  res.setHeader("expires", "Mon, 13 Aug 2018 05:05:21 GMT");
  res.setHeader("cache-control", "max-age=3600");
  res.setHeader("vary", "Accept-Encoding, User-Agent");
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "44984d867ae76c70-SJC");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA+w8+3PbNtK/+6/YsJ1ampqiJVt+xJY6dh5N5to0PbuZ63U6GohcirBAgAVAybqb/u83y5eop6PU6fn7rspMTILAvrFYLJa8fPbyhxe3P79/BZGNRX/vkv6AYHLUc1A61IAs6O8BAFzGaBn4EdMGbc9JbeieOcUjy63A/hXcasYFqBCuhVIBtLvgwns2QuicgAvfMzlicGM1svjSy8fUQEsWY8+ZcJwmSlsHfCUtSttzpjywUS/ACffRzW4OgEtuOROu8ZnAXrt16KyCCtD4mieWK1mD9ndkAYQaEeKMHiUFlwiCjxHeMZ1adQDXApkfHcAPEuE9Rx8P4E0qLWq4Ly+YDAjADGKlsVViF1yOIdIY9pzI2sQ897yY3fuBbA2VssZqltCNr2IvVNK6bIpGxegdt05bh55vzEJzK+ay5RvjgEbRc4ydCTQRonWAS4sjze2s55iIHZ0du9NJ+I/kt+Sf//zw47d/O7m9irrvP4hvfwh/fPfmRr3s3A9fff3j+P39i6vX4t0rnKhXb45uxKHhww/+Dz9+kO8c8LUyRmk+4rLnMKnkLFapcfp7Nd4yQrhPEs3Z9EI2ofsW95UDdpZgz+ExG6F37+b9vP7yeBMpbf3Uws6AMkjlry5tjxmD1mQizPRqMjMj6X1zfn501j7vHB6ft1clmROXU/jMdeHN7fffdcFEPD6AUGl4++rEPQOTJmSUZNp5BxQYo7QGXLdfDf6FhyAsvH0F578WrbkFgtH+nMY749E865qIT1p3xulfenm3EtIvKAMe/kqgF6DkQrF4b707NmF5a8EB/aZcBmra8uPkNsIYoQf/XhDYkPnjkVapDJ7D/hfhEf3bP1jokmgeMz2j50dnp+e+v/75Ld7bDEYYLnUw6CsZFCC63e6mxyUEfwUF8fcdl2N6enp6uvQ04BMeoC6HVs9+zyVVSXLRUupqKCemaUlutUrYLJuPLDDuUevOfDPpnbTbziZhL+nKyx3k3uU=", "base64"));
  res.write(new Buffer("UAUz+hvwCfCg52hkAWpXsknpG+iJL5gxPUeyyZBpyP+4AYYsFba8zUfW1Lo60o3qfS6HqbVKFhTnN87SAKtGI4HgKyFYYjBwIGCWFc09p2wvm5kekZP/IjZuDsABpjlz8T5hMsCg54RMGKwTaRImS6RGu0qKmdO/zdFKNuEjRo740qN+G4bRNHcJWf/zdbv0cgEVd2xJTkPNZFC5JBrK+nuXXsAnpXKL/qXESq3NJUjan8utwJOKGqJyzNw4CnfWv2Rz1G9UjIT+0hN8oVcJKdAqCdRU1mAUPOUwvnCWexb6XlL+HE62NubL9OWw4pRpzAx/mEtjAdecrwpHjDJdImmVvcxHe8xa5o8HSg4st0w6/ausAZSEW2pYZX8btCFqg3rs9K/zi91GB5qNlBwMmRADkyY0u15mTXDNhIAbatoNYsT4eJamTv9NfvHs2a7j73iMA6kGPEkUgaF7kAreJonaDVY8G0So1YD5LMCYM6f//QzeoFZwVbTsBk9JHCQUGTn9KkjaGUKSSj8axKT4DAjdkvntBkjiBLWgadt/r1XMDQbwrmzbDZSJ1Dgd4ZiT0I1KY+b0b8o2EvwNte0G00Y4MDhBOQiQBWI2MFwap38bIdxQM7zMmuGGS7MjZDWeqcEoUqnQSL52PFPwLd0+19uVUc3ZfDF1Ph6p03+dCgHfcWPXY7j0UlHzVsu+qwaviMg9liSC+9nqQB7I1ym3FFut9X1rxvtKKO30X9CfbLexJMY5RRu9cLX08lFkN7rkIgjM5FWJMGQQMndofRIi78NLJZnd7rdZaiN3lKKxS444VgETy0uwUCMu3fzRnJh5SPL8wul/R30eEafGETcW9QNo/150+6hVCjIS6D+UlvSNwerCVYyBlQWrWtE2rFwLK/8gNahpD1gt/Z97OTNoLZcj4/RviquPnMoLAi1xCzVSqc3UqtJPm2cLep+g5iFfJ+8tREhleVjMy1INa5hZnggohKtgYTC1FfFjxIMAZc+xOsV8wqxCxHgtCb5KZaY3jJclwdYJIhdQHrplOzuvJdmkitPmG7c8uFsX48WMS5cCe8qE1NpNOlwf1+cP3KlmSbIxhCe/pZUwy9qodRla6dJGLQG6KrYSfsQSuwB1deIMrcyGlFuKjwz8qum1CnslrM5V6N4bKK5M7Kykfspp1+4+CK+aj4uh/FrtfsI83fW3OK+1xwaWOBuocDAkzryjI6/b6Xa99pLTqeTi9I+OwIW3ECi5b0EiBjBTacHgwpgJN3wosBhU9tjoOR7z9zCfHa/b6bS38tkBFz4o7iNwCTZCsBH3x2gf5LXzxHhte932aWcrr21w4UorCv8eYK79xJg79Lrt7nZFHpLBygATlAFKCuUf4PHwafHYOfe67fbWSdk5JwWGlLu98SOlBFwFSqDxid9vHmK4c/7EGD7zuocnZ1sZPiOGwXBJKRhjMXmQybMnxuSp1z3sHm5l8hRceKmUfpC30yfG24nXPexsdTnZock1Sj96kLmTJ8Zc1+seHp5sZY7Ohl5oTlsBAe81GpPqB/1Op/vEGD32js+7x1sZPQYXXrOHfWrn+LPw9vHbfdiUpVvi+sEcAKzsT2AeaC80PRTzJmyEHxXwFucSjxTwlmeW6wT0hGPXz2bm7a53fJI7q9dcG5sLqNFu/jnT8K/fX7//5d9Hz89O2+nnvqv9587Mj6ewU1LYeaoUHpUUHj1VCo9LCo+fKoXdksLuU6XwxOl/x6qVrHOy41L2YHizfDtf9Smm0VtW+1rAlmic8KwG56PF/pVgWl9QQD3ZXfQ11BLv7UNoT7zjk3wP+g7vLXylCfV2rA==", "base64"));
  res.write(new Buffer("tcOYxbwrLIWDsWEQG+aeds4G54flqTorA0NmQ4q7KhlThncdDLd2aFMR9IZZBBYYGKYWjOVCwJRJC1ZBhCKB1HwD1+irGIHB2vOf6pK4fba3pPCscKdOiFZTNxQpD4CUn+WH12SPNwS7UE/VP6CHSx6PclFR5J6Hz1BUH3k8HrUWaqNU7PmBLKL89vF5OTXarUSOqN5qIYBdT9galR0dHg5ODld1ZniAC0pbmitrU/AbzCBUis6nhjUz2NtUbDVMuQiWCq0eKqn6suF8UZNhs6UkNhyhWOAcQJhKn84kGs2iwGrCNKgwNGihB1829mtD95ut/Emj2RIYWvh6tUNW09howtfQPrzY+73ZourDxgoWHjZsxA3pLRFosQlfZg3NFtHVaNLQi729Lxt5HVizpdHwf2FjLbnTdZQWhFw8PlPLeFvlKcgy1qVnzFrd2M/q9fYP9mOm6TCUUD53979uTL1O8+v95H6/5J301iqOZ5qthEuJQSNnekh1b+Y5HB8egOfBNEJJE36Yz3NjuT+eZR2Nr5UQXI6eQ941UYaT/CBINZejokPWN1ZDLvA5ZNVQ1NfQ8XtQ1Qvmz3PaarVpCxZOR6wQsgAdsGzIZYD3PcelUkWV7Vk5E2qUW/7CWfCqu6N2t+xfjFZ+SofpG86i8iHFSfqWA6m8X7RcmVZ13VaB5gtVFZYF3MS8AlgcCgo2pKLMF1m/Ij+y5rTwK8tjNBdVkqRex7VATHS8SHZWaZydplLZrMoLnPIyZGB+dq546UXHO2UrcsjF2eAKBUlVgyZDtcGlv8xOhyI2QSB+czpghvabTQezcwuwyi2P6J3+C420nimZVR2AVNMD4Hbf5EXOVKf8W8r98bM16YlkqU4yaw2Vjmsn0Vy61OKAVBMmeMAs0slseb1pwarJiobnqZ2tUQ9ZAZXc9hyMGRdO/xX9ufSyB1sGcpmkpSPPRy4gLpxJXXxFr0QwHyMlAtQ952eVaiiFigFkfYAFAWUmqWz4t5RTu7eFknpqqMCktdIrqN0SmtPP0Oa4uKmwHEAikBmEkGITRexF3EDIUQStTdmmDVb7KBpJmDFTpanEqrjaTS/V+IdUM++4oJ33VfNjKaJEVNNFieQxNfGgKjbZSdaQVYll1uGV9NJRMqDMjTRQaMiLxMz6ETA5sxEtUFxCbs2+0oE5AD9Cf0wDNQRoGRemtZW8BW9u0mHMrbOhwqBO89DK0svOvfP2cHaLgwuVHinr9N9CfgXxDJLK+NYlVj0yqrVefKMbx3tLlUJia455pNRIoCsY1SfmVC41rSuOWq6MyYcUVWLfZjfr2WDzcT4OlRrvhKYcVCB6Xdw+gMpOuaV4ehdMxZgC0W1+t1pStXFbvBj1f2pItFyq9ldUtFtUdFUEHnktny6K9P/0aOh7NibPVYuElFwI1MjpUr6G4hlkZtaCbOksewu0JnONvopJszRcY+a6DXzF4uQCJE7NwVrkBDMbyyQF8NPcVZYx/HAGJh3SPBgSiQ0WuFlkVaPuWbMFV4K2ubPliG5rNFcZr1Vu5vicfrHciMyNZidIwKWxyILWxwZw81dQCuhbvBz9flYpMI3Ahtn6piB7r4rRSqcpY6HtDIzyORMQY8BZJXSrgJFY10XULfhB+kiSXIszZmPMKoaK7geVAlKDhfw3oCxEQ1Jh0opZWXsUpjbV2IK34UasbEFH68g+KMGTTWRyINBrSQm1igtKi5rPdRpav8wuBNmVnv7sOHteJvtTcbVbVEdpkw0RXczuBcqRjXpO5yw39grbYmj3Ek0Wz5WPoZGkQ8F9MQN6F5QNBTY/IeybG/88tCpRuA==", "base64"));
  res.write(new Buffer("qeS/kfO8jZidI+amMhDLxihb8D6fjFQuZMgKYswDrICHIWqUdmsIuBtN8zj0pxpBfzgO3Y2Ika0ZA8SpsTBEYORfyfkeZe//Mt+iNiCUHD0iarGA2mdSqgw5vV8LNmISOmefET0TScRkGi/SQG8Hz7J3hxn5hKIPau7XSWkw91+Zwzh0z5v/lf3Z59sxr9srfyCf9Ek75CoUoDy7OxTKH1Px8KQGsGb00JipdF8IMgNDizqDvJQ9LwnP/DPJO/kDBpBvyBccQkVH6Q2YyRYAiwFMuY2AzR1Atdz9YUtczgxslMr/YnLg8dMC61TwuXMCuxGR+eIK/4ov3s0Zfm7dD3wlwxq5L5QMuY6L7cRnsoYc6XqTgAYbMS6bj20aMTdZtiXPzZTNZiktUyVlPj1HtHMSpiI7y8MUWeGrMr+9cV+4OWvy2fbseULnrx37H9uxU3pvgnr2X9it51usLduo7GSdFu8JFuk7izLfLJVTpvKi2azJn+Vr3RCFmm7cqE+RIgKDxZ6dgvJsL6jT7JDT0BaxEA1w2/qUU4/CPv//HHsUDP0Z5x4lqrnrrCP/7Ccfj+RLC5ozT3qNIy5rs+0JelKT+j4a85dH/T/rUb+l5foZOVY734JkEQSazVnRA8D7BH1b+DzkmT+O0RiqassSVKkp8mNr0VKVF4Q4hZjL1KLJ9zdhqm1E7rPmVjc40k8xdmqpfSln4S1fE7FATauanvWdhup+Q9VP+W0flnDTyk9csjKnO0NNz33BKWmzthQop6v4hFI4vDIz6b+VnIpfVgpo6Pf6ukUfIWssfmKJJcnbIL98Dvvts9OT4+7p+VH39LB73D1e+paRr9SYY9GZTHnx8X04jAVsfDxBbWgXnKOadFpnta8hFdU0v+d/5iVAwQGYA+BBc042VeXcmQMI7wz0IGiN0L4qvm51Pbtlo3csxoZp/nL460U1hofQqPe8nr0NGjxoNuHfGm2q5cXvVd8CrJ8FpEX/hmlewJ1p8QB6wIOLWueW0T70oFKlr6RE37bKg62WROuhHPx045lgTLqcjw7vTCthtC9/pwJscWlQ22sMlcZGwWIpmEbp/w5gPzeA/QPYr47c7owJxvvN5sXeas3Ycn3ZBGWgNH06qv6lsf7DA1mSfMSobV/9Igi0CeJU2cflINUCerDv7V8sP85r8LZ0YAkvn9Zm0UrB4OpAbgZ5mRPNFKqDmvfIkebzZH975SpJf2txI9V4FRVipeqaGYJZZd2wMEGpkmzpdaD9ZtVS1pv9vqDieQ2il3/Q69LLv4z4HwAAAP//AwAefDH5KlEAAA==", "base64"));
  res.end();

  return __filename;
};