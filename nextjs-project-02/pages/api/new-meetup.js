import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  console.log(req.body);
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://mongodb-user:bT4cG3raGz7RT3kQ@cluster0.b5nw4.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const collectionMeetupd = db.collection("meetups");
    const result = await collectionMeetupd.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({ message: "Meetup inserted!" });
  }
};

export default handler;
