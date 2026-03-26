import { useState } from 'react';
import { useFadeUp } from '../hooks/useFadeUp';

const poems = [
  {
    title: 'A Nomad in Love',
    year: 'November 2025',
    note: 'Written after a long night of pondering',
    text: 
      `i have this vision where you fell asleep in the car
      and i carried you to our bed

      for you i’d
      unlearn the way i see the world
      and feel and love and exist
      if it makes you feel safer
      around me

      during the hard times i’d
      caress you in my arms
      “it’ll be okay my love”
      but i hope you find the garden i grew for you 
      whenever you need a minute to ponder
      or breathe

      i wish i met you earlier, so you could meet me without my baggage
      i think we would’ve been best friends 
      but i wish i met you later, so we could grow old together 
      i think we would’ve shared our dying breath

      grant me a few more minutes with you before 
      you leave
      the backdoor will always be open 
      on the same street where we shared our first kiss
      i promise next time i’ll love softer

      in 50 years, i’ll dream of you
      old and grey but still as gorgeous as the day i met you
      you held out your hand 
      i took it without a second thought 

      and if i had nine lives, 
      i’d choose you in every single one
      to be nomadic free and broke
      with you`,
  },
  {
    title: 'An Ode to my love for you',
    year: 'October 2025',
    note: 'Loving an avoidant',
    text: 
      `I want to take you to my favourite place
      where the ocean meets the cliffs 
      I once wanted to dive off of

      Tell me something worth living for
      I have your voice and your eyes
      that even my prayers know about

      I’ll tell you all my fucked up thoughts 
      And you’ll laugh at all my blind spots
      You’ll tell me about little things you love
      And I’ll stare at you in complete awe 

      Give me all of the hurt you once felt
      I’ll knead them into flower seeds
      and plant them in my garden
      I’ve been growing 
      To make a bouquet for you

      My calluses grow thicker as I 
      Try to learn your favourite song on my old guitar
      My ink running out as I 
      Rush to scribble down your favourite things in my notebook

      Forever I’ll sit next to you
      Breathing in the fumes you let out
      and make my bed next to your concrete walls
      until you take my hand
      or someone better takes my place

      Trust that when you lay down your mask that
      I will only fall in love with you more
      Trust that I will rip my heart open piece by piece before 
      I ever scrape yours

      Like clockwork 
      You’ll leave and choose another but
      I’m willing to spend a lifetime figuring you out
      If you’ll so kindly let me`,
    },
    {
      title: 'Hey',
      year: 'August 2025',
      note: 'When you lose one too many friendships',
      text: 
        `Hey
        Nice to meet you
        How long do I have before I lose you?

        One an outlier
        Two a coincidence 
        Three, a never ending pattern of the world
        Deeming me unlovable

        I count my days
        Cataloging every smile, every word, every hug, like it was the last
        I mourn every happy moment I do not get to witness so I am 
        stopping at every red light
        I hope I’m not overstaying my welcome 

        Is 8 billion enough for my lifetime?
        My garden of gravestones 
        Marks every fallen soldier and casualty
        who have dared to hold my hand
        The contact list infused with a smell of unfamiliarity 
        Disturbance now a desire 

        Who am I without your love?
        A shadow perhaps, empty, shapeless 
        Matching the moves of those on the pedestals
        Desperate to fit within every crack in the arteries of anyone I have ever loved

        As I slowly squeeze and slice out the most hideous parts of me
        I’m losing 
        the 8 year old who believed in magic
        the 14 year old who believed in humanity
        And the 18 year old who fell in love for the very first time 

        And soon I forget
        Who I was in those moments
        and what I was trying to fix
        But I don’t think I’ll ever stop
        Until the slate is clean
        And I’m finally anew 

        Hey
        Nice to meet you
        What did I ever do to deserve you?`,
    },
    {
      title: 'Conversations through the walls of the psych ward',
      year: 'April 2025',
      note: 'On the first trip to the psych ward',
      text: 
        `Sometimes I wish to exist in a pocket of space between time
        Where the world lays silent
        And humanity disappears

        You’ll catch the alcoholic mothers
        The runaway fathers
        The rebellious teenagers 
        And the shadows you’ve stopped grieving

        We colour outside the lines and
        Put the wrong pieces together 
        Dance around the words on the page
        And write nonsense in the blank space 

        I’m sorry we’re 
        Smoking till our lungs turn black
        To feel something, anything
        I’m sorry we’re
        Drinking ourselves to sleep
        To forget something, anything 

        When did they all grow out of kids’ menus
        while we’re stuck learning how to speak 
        Once you make enough wrong turns,
        You’re bound to get lost and beat

        We’re trying, I promise we’re trying
        To be understood without over explanation 
        To love and be loved without desperation

        I’ve loved with everything I had
        Or maybe I never loved at all`,
    },
    {
      title: 'Sacred Heaven',
      year: 'December 2023',
      note: 'For my chosen family',
      text: 
        `I realised I’ve been digging my own grave
        When you took the shovel from my hand
        And interlocked my fingers with yours

        With no space in between our empty bodies 
        I basked in your warmth to feel worthy 
        I finally felt enough.

        I got sick grieving expectations 
        And promises turned disappointments
        My heart beat against my will 
        I love too much but not enough
        I dreamt as a form of medication

        In your comfort I accidentally
        let loose of the breath I didn’t know I was holding
        Why is breathing no longer suffocating?

        Maybe love exists
        In the smell of breakfast in the kitchen
        The off key singing that echoes through the rooms
        And the laughter that can light up starless nights

        In these moments I can’t help but think
        Maybe God has forgiven me
        And granted me angels to keep me alive

        To sing me tunes that healed my blues
        And kiss my wounds till they’re tattoos
        Until I fell in love with living 
        Again

        This is the first time I’ve understood the word: home.`,
    },
    {
      title: 'My Queen',
      year: 'Nov 2023',
      note: 'Inspired by King George and Queen Charlotte',
      text: 
        `I. - Mercury
        No one believed that I would survive
        when I stumbled upon this dire life
        I was born with mercury in my veins
        Locked in a cage, tied up in chains
        Forever bruised with this curse lodged in me 
        Afraid that one day they’d all just leave me
        Faces painted with fear, when I started spiraling 
        Hoping someone would look at me like I was worth loving 

        II. - Venus
        Our first encounter, you tried to run
        Our eyes met, and the deal was done
        Halfway over the wall, my heart was tamed
        An artist’s best work, you put the stars to shame
        Grieving your departure before you said your name
        Everything I kiss ends up in burning flames
        Pretty brown eyes, you could heal my blues
        Venus in the sky, but all I saw was you 

        III. - Mars
        Their tortured voices haunt me at night
        Turbulent dust storms take over my mind
        They tried to erase my writings on the wall
        Even to the best of doctors, the order was tall
        My throat tightens, left with incoherent words 
        Eternity with me, is eternity with this curse
        But you traced a heart in my palm with the tip of your finger
        Melting the frosty layers that formed every winter

        IV. - Jupiter
        Stuck in my head, gripping the carriage door handle
        violent flashes of every birthday cake candle
        When small twitches dance around my fingertips
        Your name is the only thing on the end of my lips 
        It’s not all warm skies and misty clouds 
        Sometimes the thunder storms out loud 
        A smoking gun, aimed at your head
        Sometimes I think I’d be better off dead

        V. - Saturn
        The ring on my finger, its weighing heavy 
        I disappeared, didn’t want you to see me 
        The heavens and the earth in my mind are colliding 
        A life with me, you’d just be surviving
        please, leave, don’t let me hurt you more
        the star we built will collapse at its core 
        My thoughts churn into a galaxy, and I am the black hole
        Begging you to keep the light of your soul 

        VI. - Uranus
        Breathtaking, but you kept me breathing, 
        Caressed my younger self, kept my rocky core beating
        they tore me apart like meteor showers
        you loved all my fragments back together
        Never have I felt more lucky to be alive
        wondrous eyes staring up at the clear sky
        Handpicking which constellation to name after you
        Who made me believe in love to the moon

        VII. - Neptune
        The delicate redshift glow on our faces
        Blurry words nearing the end of our pages 
        The grief you hold spread like ash across your wrinkles 
        but the flickering stars in your eyes, they still twinkle
        The poison in my blood, I’ll never wash clean
        But I’ll still ask you to dance like we were kids at seventeen
        Always thought this life would leave me paralysed
        But your love for me has made it paradise`,

    },
    {
      title: 'Skipping Beats', 
      year: 'August 2023',
      note: 'Love Unrequited',
      text: 
        `In meeting you,
        I forgave the world.

        You tried to colour in my EKG lines
        with a lead that keeps on breaking
        It’s okay, you don’t have to worry about it
        The doctor told me it’s not my heart
        It has never been my heart.

        Hands shaking, heart beating 
        I wish I could grab
        it 
        and make it stop
        I can never make it stop 

        Instead I scrunch up the edges of your hoodie and
        caress the part of you you hurt most
        to slow the cadence of my shaky breaths
        to shut my voice out so
        they would stop talking about you

        Swimming to the surface for air
        I wish I had taken swimming lessons 
        without humiliation and nakedness 
        so I could stop choking every time I tried 
        to fucking 
        breathe.

        In loving you, 
        I forgot the blemishes of the world
        that came to haunt me after 
        you saw the blemishes on me

        And in the static darkness
        I wonder
        if you ever loved me at all`,
    },
    {
      title: 'One Last Dance',
      year: 'September 2022',
      note: 'Inspired by Anthony and Kate',
      text:
        `I remember that morning, our eyes met
        The only thing you left, a silhouette 
        Not even a name, a secret scent 
        In my prosaic life, you made a dent
        You are a shadow that I can’t reach, 
        a mirage I can’t touch, imprinted so deep
        Your delicate features, the moon’s sheen
        Are you real, or just a dream?

        II 
        Your acceptable wit, genteel manners
        My pleasing smile, our comical banters
        Don't believe in soulmates, or love at first sight,
        maybe this will be that once in a lifetime
        But love is a myth they tell to lost children,
        like naive stories of heroes and villains
        Something that no one should ever desire
        collections of nonsense written by liars

        III
        That lily scent at the back of my mind
        We’re walking down a thin silver line
        Not a fan of flowers, or shallow acts of love,
        just messy conversations till the stars come up
        Pains me to see you dance with another
        I hid my feelings, all undercover 
        I try to speak, but I get tongue tied
        When all I can see are your dark brown eyes

        IV
        I was never one to stay up and dream
        about stupid romantic movie scenes
        You look at me, and the stars collide
        But it will pass, the feeling will die
        Breath on my cheeks, my quickened heart
        Your scorching gaze, ripped it apart
        God tell me how I can truly hate you 
        when even my demons can’t help but love you?

        V
        It’s the bane of my existence 
        your unforgettable fragrance
        The object of my desires
        you light my world on fire
        Strike of a match, a hint of doubt
        if we burn too fast, I’m scared we’ll burn out
        Hand on my chest, our heart beats align
        and that’s when I fall for the millionth time

        VI
        That endless night, it was pouring
        Your body lay still, heartbeat fading
        Your clothes entangled in the wind
        The sparks died out with the broken flint
        Caress your face in my bloody red palms
        Whispered prayers, with you in my arms
        Push away the thoughts of our separation
        Fear you’ll get lost in the constellations

        VII
        In the moon's shadow, your eyes glow
        Pacing around you, my aching grows
        Tell me, my love, do you feel it too?
        Tell me you feel it, because I do
        Another lifetime, another universe
        Free of our flaws, our fatal curse
        Would you kindly give me another chance
        the next time I ask your soul for a dance?`,
    },
    {
      title: 'Lives of beautiful people',
      year: 'April 2022',
      note: 'A spoken word piece for mental health',
      text: 
        `Her friends just invited her to a party
        And his perfect family is having dinner together this weekend
        Jealousy and envy fill the room 
        Privilege is now a list of checkboxes on a page
        And they seem to tick all the boxes but

        Sometimes she cries on the floor of her bathroom, 
        locking their voices out 
        While he punches the walls in his room, 
        all he wants is to scream and shout 
        When all her flaws are boarding the train 
        With her fragile mind tied to the tracks
        When all his insecurities punch their way through
        The waves of empty praises that has drowned him

        They share the same pain, 
        But are met with turned backs
        Everyone shielding their nakedness from each other 
        Afraid 
        to be hurt
        To be let down
        Because they are so used to the same old pattern
        Where the wheels won’t stop turning 
        Until their sanity is run over

        They scramble to find the pieces of themselves that
        People have so carelessly left
        Under the mattress, in the sofa, between the books of a never ending tragedy 
        About how they should’ve seen it coming
        They should’ve known
        They should’ve listened
        But instead

        She’s just a bit too complicated, and he’s just a bit too weak
        She’s just attention seeking, and he’s just stressed over nothing
        She feels the emptiness of her family and friends while
        The only thing he feels is the rain drops on his bare skin and nobody 
        would even dance with him in the rain
        She just wants someone to want her, and he just wants someone to hold him
        She just wants someone to care, and he just wants someone to love
        The way he does

        the IV line around her throat,
        Every attempt to save her feels like 
        suffocation
        the lifeline around his wrists
        Every attempt to save him feels like
        Incarceration

        Nothing will hurt more than 
        The poisonous vines wrapped around her mind
        Planted and grown by people who claim to love
        Nothing will hurt more than
        The layers of his hard earned trust
        Peeling, ripping, tearing down

        She’s fading, he’s aching
        They’re tired of faking 
        She’s scarring, he’s bruising
        They’re tired of hurting

        She’s fine, he’s fine
        We’re all fine, right?`,
    },
    {
      title: 'Heartstrings',
      year: 'January 2022',
      note: 'Having a crush but you’re self depracting',
      text: 
        `Please stop haunting my fantasies
        till they become nightmares
        I’ve had enough of those in reality
        Take me somewhere, anywhere

        Flood my head with romanticised moments
        Pull me out of this godforsaken dream
        Choking on the words left in my throat
        We were never gonna be the winning team

        Ripping out the prettiest bits of me, 
        made into a collage for you to see
        Hanging on to the slightest hope 
        that maybe you’ll finally notice me

        Broken records replaying my sins
        Convince myself that’s all I’ll be
        A creature hidden beneath its skin
        Morphing into whatever you seek

        Fill me up with the anaesthesia
        that I call self-deprecation 
        Your red flags whitening mine,
        and I’m blinded by my tunnel vision

        If I torture myself to the brink of death,
        then no one can bruise my fragile mind
        If I turn into my worst demons, 
        then no one can cross my bottom line

        So I continue to swallow the painkillers 
        even though they’ve stopped numbing
        And I’ll continue to play the guitar 
        made of their stolen heartstrings`,
    },
    {
      title: 'Saviour Complex',
      year: 'Aug 2021',
      note: 'My Favourite Poem summing me up in a nutshell',
      text: 
        `Some of us were just born lovers, maybe
        we were never meant to get anything back
        only to give, give, give

        My feelings were never meant to be coloured
        in between the lines
        of my rationality and insecurities

        Touch your wounds with my tender kisses
        I hope that I can heal you, not all of you, just the parts that hurt 
        a little too much

        Sing off-key with me, draw stick figures in the margins of my favourite book, 
        write nonsense on my arms with a permanent marker
        I will tattoo them on when I get older

        Promise me when I go, because I will
        That you will love yourself enough to
        Move when the train is heading towards you
        Because your heartbeat is my favourite melody

        I hope you will learn to live 
        for the sake of living
        not breathing, existing, but
        to see all the colours in the rainbow
        and smell the faint scent of sunflowers

        I hope I made you feel something, anything
        Because if you saw yourself through my eyes, my love,
        you would love yourself for eternity`
    },
    {
      title: 'Your Afterglow',
      year: 'October 2020',
      note: 'Inspired by Dani and Jamie who made me believe in love',
      text: 
        `When I met you, you were glowing pink and purple
        Not a believer of magic but, you were magical
        The light within you, could light up centuries of darkness
        It made me feel just a little less heartless
        The details of your features, tattooed into my brain
        The anger drowned, but I still felt insane
        Your mesmerising eyes, told a hundred different stories
        I wondered how many of those would become our memories
        
        The ice around my heart, melted like it was Summer
        Just one look at you, and I was a goner
        The entirety of my nightmarish life, bereft of love
        For the first time, I finally felt enough
        You brought me serenity, wrote lyrics to your melody
        Morphine was useless, you were my remedy
        The rush of oxytocin, foreign and formidable
        Till this day, I can’t fathom this miracle

        Outside your door, my heartbeat quickened
        In the stars above, it was already written
        Bitter person, but sweet for you
        It wasn’t Spring, but all the flowers grew
        Sat on the roof, as we watched the sunset
        Our favourite songs, saved in cassettes
        Your beauty, no language on Earth could portray
        You brought the warmth on this dark winter day

        The news had come, your light was fading 
        Wasn’t a believer, but I was praying
        Your hair was falling, like leaves in Autumn
        How you felt in my arms, I haven’t forgotten
        Clench of fist, the flowers wilted
        God tell me what sin I had committed
        Down on my knees, take me instead
        I won’t matter if my soulmate is dead

        Closing my eyes, the knives still in me
        I know taking them out, will just kill me
        The weight of the ring, pulling down my finger
        I push them away, but the thoughts still linger
        On these dark winter nights, I sit on roofs alone
        The cassettes play, while I wait for the world to glow
        Silently wishing it a gentle rainbow luminance
        So I can be reminded, the beauty of your existence

        Your stone carved with words, buried in snow
        Tears of mine fall, but the flowers will not grow
        I wish when one goes, it’ll trammel up the memories
        So I won’t need to bear this pain alone for centuries
        Still, I hold on, I hold on for dear life
        Because what is my life, deprived of your light?
        You were the epitome of God’s creation
        Or were you just a figment of my imagination?

        Maybe you’re with angels, people that deserve you
        Granting them the same light I saw, when I first met you
        I look for it in the stars, every lonely night
        All I have left, is your light engraved in mine
        But your light isn’t tangible, I can’t wrap it in my arms
        Can’t give you protection, keep you away from harm
        So I’ll enjoy your afterglow, watch it from afar
        Like I watched you, as I lost you to the dark`,
    },
];

const PoetrySection = () => {
  const headRef = useFadeUp();
  const [active, setActive] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section id="poetry" style={{ minHeight: '100vh', padding: '5rem 1.5rem', position: 'relative', zIndex: 1 }}>
      <div className="nebula" style={{ width: '50vw', height: '50vw', background: 'radial-gradient(circle,rgba(40,20,80,0.1) 0%,transparent 70%)', bottom: '-5%', left: '-15%' }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div ref={headRef} className="fade-up" style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <div className="section-label" style={{ marginBottom: '0.8rem' }}>✦ Verse</div>
          <h2 className="section-title" style={{ fontStyle: 'italic' }}>Poetry</h2>
          <p style={{ fontFamily: "'EB Garamond',serif", color: 'var(--silver-dim)', fontSize: '1.1rem', maxWidth: '460px', margin: '1rem auto 0', lineHeight: 1.8, fontStyle: 'italic' }}>
            Small architectures of feeling. Built carefully, then released.
          </p>
        </div>

        {/* Mobile: dropdown selector */}
        <div style={{ display: 'none' }} className="mobile-poem-select">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              width: '100%', padding: '1rem 1.2rem',
              background: 'rgba(13,11,30,0.7)', border: '1px solid rgba(201,169,110,0.2)',
              color: 'var(--cream)', fontFamily: "'Cormorant Garamond',serif",
              fontSize: '1.1rem', fontStyle: 'italic', cursor: 'pointer',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              marginBottom: menuOpen ? 0 : '2rem',
            }}
          >
            <span>{poems[active].title}</span>
            <span style={{ color: 'var(--gold)', fontSize: '0.8rem' }}>{menuOpen ? '▲' : '▼'}</span>
          </button>
          {menuOpen && (
            <div style={{ background: 'rgba(8,6,20,0.95)', border: '1px solid rgba(201,169,110,0.15)', borderTop: 'none', marginBottom: '2rem' }}>
              {poems.map((p, i) => (
                <button key={i} onClick={() => { setActive(i); setMenuOpen(false); }}
                  style={{
                    display: 'block', width: '100%', textAlign: 'left',
                    padding: '0.9rem 1.2rem', background: 'none',
                    border: 'none', borderBottom: '1px solid rgba(255,255,255,0.04)',
                    cursor: 'pointer',
                  }}>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '1rem', fontStyle: 'italic', color: i === active ? 'var(--cream)' : 'var(--silver-dim)' }}>{p.title}</div>
                  <div style={{ fontFamily: "'Cinzel',serif", fontSize: '0.55rem', letterSpacing: '.15em', color: 'var(--gold-dim)' }}>{p.year}</div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Desktop: sidebar + poem */}
        <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '4rem', alignItems: 'start' }} className="desktop-poem-grid">
          <div style={{ position: 'sticky', top: '7rem' }}>
            <div style={{ borderLeft: '1px solid rgba(201,169,110,0.15)', paddingLeft: '1.5rem' }}>
              {poems.map((p, i) => (
                <button key={i} onClick={() => setActive(i)}
                  style={{ display: 'block', width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', padding: '1rem 0', borderBottom: '1px solid rgba(255,255,255,0.04)', transition: 'all .3s' }}>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: i === active ? '1.2rem' : '1.05rem', color: i === active ? 'var(--cream)' : 'var(--silver-dim)', fontWeight: i === active ? 500 : 400, fontStyle: 'italic', transition: 'all .3s', marginBottom: '.15rem' }}>
                    {p.title}
                  </div>
                  <div style={{ fontFamily: "'Cinzel',serif", fontSize: '0.58rem', letterSpacing: '.15em', color: i === active ? 'var(--gold)' : 'var(--gold-dim)' }}>
                    {p.year}
                  </div>
                </button>
              ))}
            </div>
          </div>
          <PoemDisplay poem={poems[active]} key={active} />
        </div>

        {/* Mobile: poem display (shown below dropdown) */}
        <div className="mobile-poem-display">
          <PoemDisplay poem={poems[active]} key={`m-${active}`} />
        </div>
      </div>
    </section>
  );
};

const PoemDisplay = ({ poem }: { poem: typeof poems[0] }) => {
  const ref = useFadeUp();
  const lines = poem.text.split('\n').map(l => l.trim());

  return (
    <div ref={ref} className="fade-up" style={{ position: 'relative', padding: '3rem', background: 'rgba(13,11,30,0.5)', border: '1px solid rgba(201,169,110,0.08)' }}>
      <span className="ornament-corner ornament-tl" />
      <span className="ornament-corner ornament-tr" />
      <span className="ornament-corner ornament-bl" />
      <span className="ornament-corner ornament-br" />

      <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '5rem', color: 'var(--gold)', opacity: 0.15, lineHeight: 0.8, marginBottom: '1rem' }}>"</div>

      <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '2rem', fontWeight: 400, fontStyle: 'italic', color: 'var(--cream)', marginBottom: '2.5rem' }}>
        {poem.title}
      </h3>

      <div style={{ marginBottom: '2.5rem' }}>
        {lines.map((line, i) => (
          line === ''
            ? <div key={i} style={{ height: '1.2rem' }} />
            : <div key={i} className="poem-line">{line}</div>
        ))}
      </div>

      {poem.note && (
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: '0.58rem', letterSpacing: '.2em', color: 'var(--gold-dim)', borderTop: '1px solid rgba(201,169,110,0.1)', paddingTop: '1.2rem', textTransform: 'uppercase' }}>
          — {poem.note}
        </div>
      )}
    </div>
  );
};

export default PoetrySection;
