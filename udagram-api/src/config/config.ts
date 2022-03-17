import * as dotenv from "dotenv";
dotenv.config();

export const config = {
  username: `${process.env.POSTGRES_USERNAME}`,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  dbPort: Number(process.env.DB_PORT),
  port: Number(process.env.PORT),
  host: process.env.POSTGRES_HOST,
  dialect: "postgres",
  aws_region: process.env.AWS_REGION,
  aws_media_bucket: process.env.AWS_BUCKET,
  aws_key: process.env.AWS_ACCESS_KEY_ID,
  aws_secret: process.env.AWS_SECRET_ACCESS_KEY,
  url: process.env.URL,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};
