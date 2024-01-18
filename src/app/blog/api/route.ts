import blogs from '../../../../BlogData/data.json';

export async function GET() {
    return Response.json(blogs)
  }