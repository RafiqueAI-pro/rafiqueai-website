import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') || 'Rafique AI';
    const description = searchParams.get('description') || 'Tecnologia que Transforma a Realidade';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#2B375D',
            backgroundImage: 'linear-gradient(135deg, #2B375D 0%, #1a2238 100%)',
            padding: '80px',
          }}
        >
          {/* Logo/Icon Area */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '40px',
            }}
          >
            <div
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '30px',
                backgroundColor: '#00D4AA',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '60px',
                color: '#2B375D',
                fontWeight: 'bold',
              }}
            >
              R
            </div>
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              color: '#FFFFFF',
              textAlign: 'center',
              marginBottom: '20px',
              fontFamily: 'Inter',
              lineHeight: '1.2',
            }}
          >
            {title}
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: '36px',
              color: '#B8C4D9',
              textAlign: 'center',
              maxWidth: '900px',
              fontFamily: 'Inter',
              lineHeight: '1.4',
            }}
          >
            {description}
          </div>

          {/* Footer */}
          <div
            style={{
              position: 'absolute',
              bottom: '60px',
              right: '80px',
              fontSize: '28px',
              color: '#00D4AA',
              fontFamily: 'Inter',
            }}
          >
            rafiqueai.com.br
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error) {
    console.error('Error generating OG image:', error);
    return new Response('Failed to generate image', { status: 500 });
  }
}
