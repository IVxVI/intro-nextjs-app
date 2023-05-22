export default function handler(req: { method: string; body: any; }, res: { json: (arg0: { message: string; }) => void; }) {
  if(req.method === 'POST') {
    console.log(req.body);

    res.json({ message: 'ok' })
  }
}