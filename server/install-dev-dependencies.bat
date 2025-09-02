@echo off
echo 开始安装开发依赖包...

npm install --save-dev @types/archiver@^6.0.3 ^
                   @types/bcrypt@^5.0.2 ^
                   @types/cookie-parser@^1.4.9 ^
                   @types/cors@^2.8.19 ^
                   @types/dotenv@^6.1.1 ^
                   @types/express@^5.0.3 ^
                   @types/jsonwebtoken@^9.0.10 ^
                   @types/mongoose@^5.11.96 ^
                   @types/multer@^1.4.13 ^
                   @types/node@^22.17.0 ^
                   @types/passport@^1.0.17 ^
                   @types/passport-jwt@^4.0.1 ^
                   nodemon@^3.1.10 ^
                   prettier@^3.6.2 ^
                   ts-node@^10.9.2 ^
                   typescript@^5.9.2

echo 开发依赖包安装完成 ✅
pause
