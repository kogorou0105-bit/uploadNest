@echo off
echo 开始安装依赖包...

npm install @aws-sdk/client-s3@^3.859.0 ^
            @aws-sdk/lib-storage@^3.859.0 ^
            @aws-sdk/s3-request-presigner@^3.859.0 ^
            @logtail/node@^0.5.5 ^
            @logtail/winston@^0.5.5 ^
            archiver@^7.0.1 ^
            axios@^1.11.0 ^
            bcryptjs@^3.0.2 ^
            cors@^2.8.5 ^
            date-fns@^4.1.0 ^
            dotenv@^16.6.1 ^
            express@^5.1.0 ^
            helmet@^8.1.0 ^
            jsonwebtoken@^9.0.2 ^
            mongoose@^8.17.0 ^
            multer@^1.4.5-lts.2 ^
            passport@^0.7.0 ^
            passport-jwt@^4.0.1 ^
            uuid@^11.1.0 ^
            winston@^3.17.0 ^
            zod@^3.25.76

echo 依赖包安装完成 ✅
pause
