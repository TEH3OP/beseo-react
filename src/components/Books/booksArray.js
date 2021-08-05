const booksArray = [
    {
        id: 5,
        name: "HTML 101 The Essential Beginner's Guide to Learning HTML Coding",
        description:
            'With so much information about web development and online coding tutorials out there, it can be difficult to know where to start. Many guides, websites and books can be confusing and don’t make it easy for those starting out, wanting to build a solid foundation and understanding.',
        category: 'HTML',
        image: '/books_image/5_html101.jpg',
    },
    {
        id: 6,
        name: 'HTML CSS in 8 Hours, For Beginners, Learn Coding Fast!',
        description:
            'This Book Absolutely for Beginners:"HTML CSS in 8 Hours" covers all essential HTML and CSS knowledge. You can learn complete primary skills of HTML and CSS fast and easily.',
        category: 'HTML',
        image: '/books_image/6_html_css.jpg',
    },
    {
        id: 1,
        name: 'FullStack React',
        description:
            'This book broadens our understanding of multiple frameworks and ways to employ full-stack development. You will be a confident developer, after digesting the topics in this important text. All contributors are respected authors and developers, with extensive experience with many languages and frameworks',
        category: 'React',
        image: '/books_image/1_fullstack_react.jpg',
    },
    {
        id: 2,
        name: 'HTML To React: The Ultimate Guide',
        description:
            'This is an amazing book for anyone who is struggling with web technologies and wants to learn HTML to React along with all the tools like Git, JavaScript, etc. This book will teach you everything about Web Development to build scalable, production-ready web applications like a pro.',
        category: 'React',
        image: '/books_image/2_html_to_react.jpg',
    },
    {
        id: 3,
        name: 'Learning React: Functional Web Development with React and Redux',
        description:
            'Beginners may want to step back from intense immersion in advanced React coding with this book. The authors recognized that some new developers may be intimidated by the sheer size and volume of React material and created a way to ease into the community.',
        category: 'React',
        image: '/books_image/3_learning_react.jpg',
    },
    {
        id: 4,
        name: 'Wordpress For Beginners 2019',
        description:
            'WordPress is an extremely popular and amazingly powerful web content management system. If you want to spend less time struggling with complex instructions, and more time building sites that make you proud, this is the book for you!',
        category: 'Wordpress',
        image: '/books_image/4_wordpress_for_beginners.jpg',
    },
]

export const getBooksObj = (array) => {
    return array.reduce(
        (object, book) => ({
            ...object,
            [book.id]: book,
        }),
        {}
    )
}

export default booksArray
