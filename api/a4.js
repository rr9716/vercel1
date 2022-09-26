export default async function handler(request, response) {
    const RSSHub = await require('rsshub');
    await RSSHub.init({            });
    console.log(RSSHub);
    let x = await RSSHub.request('/twitter/user/historyinmemes')
    //  const RSSHub = require('rsshub');

    let data = 'zx';
    // response.status(200).json({ data    });
    response.end(x.title);
}