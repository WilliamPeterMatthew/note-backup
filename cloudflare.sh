#!/bin/bash
rm "CNAME"
sed -i "s/gh.zhangkaixin.cc/cf.zhangkaixin.cc/g" `grep gh.zhangkaixin.cc -rl ./`
find ./ -name "*gh.zhangkaixin.cc*" | while read f; do mv $f ${f/gh.zhangkaixin.cc/cf.zhangkaixin.cc}; done