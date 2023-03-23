import { printActions24hr } from '@/lib/actions'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  total: number
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    let wam = req.body;
    let user = JSON.parse(wam);
    const workedTimes = async () => {
        const work = await printActions24hr(user.wam);
        return work
    };

    workedTimes().then((data) => {
        try {
            return res.status(200).json({ total: data.total });
        } catch (err) {
            return res.status(500).redirect('/console');
        }
    });
}