import { motion } from 'framer-motion';
import { books, getAmazonImageUrl, getAmazonProductUrl } from '@/data/books';

export const Books = () => {
  const featuredBook = books.find(book => book.isFeatured);
  const otherBooks = books.filter(book => !book.isFeatured);

  return (
    <section id="books" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            出版書籍
          </h2>
          <p className="text-lg text-gray-600">
            宮川 清実 著作一覧
          </p>
        </motion.div>

        {/* おすすめ書籍（大きく表示） */}
        {featuredBook && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="flex items-center justify-center">
                  <motion.a
                    href={getAmazonProductUrl(featuredBook.asin)}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="block"
                  >
                    <img
                      src={featuredBook.imageUrl || getAmazonImageUrl(featuredBook.asin)}
                      alt={featuredBook.title}
                      className="w-full max-w-sm rounded-lg shadow-2xl"
                    />
                  </motion.a>
                </div>
                <div className="flex flex-col justify-center">
                  <span className="inline-block bg-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4 w-fit">
                    おすすめ
                  </span>
                  <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                    アミダス<ruby>人<rt className="text-base">ひと</rt></ruby>
                  </h3>
                  {featuredBook.subtitle && (
                    <p className="text-lg md:text-2xl text-justify font-bold text-gray-600 mb-4">
                      {featuredBook.subtitle}
                    </p>
                  )}
                  {featuredBook.description && (
                    <p className="text-gray-700 mb-6 whitespace-pre-line leading-relaxed text-justify">
                      {featuredBook.description}
                    </p>
                  )}
                  <div className="mb-6">
                    <p className="text-gray-600 mb-2">
                      発売日: {new Date(featuredBook.publishDate).toLocaleDateString('ja-JP')}
                    </p>
                    <p className="text-2xl font-bold text-blue-600">
                      ¥{featuredBook.price.toLocaleString()}
                    </p>
                  </div>
                  <motion.a
                    href={getAmazonProductUrl(featuredBook.asin)}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  >
                    詳細を見る
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* その他の書籍（コンパクトに表示） */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            その他の著作
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {otherBooks.map((book, index) => (
              <motion.div
                key={book.asin}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <motion.a
                  href={getAmazonProductUrl(book.asin)}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="block"
                >
                  <div className="aspect-[2/3] overflow-hidden bg-gray-100">
                    <img
                      src={book.imageUrl || getAmazonImageUrl(book.asin)}
                      alt={book.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-3">
                    <h4 className="text-sm font-bold text-gray-900 mb-1 line-clamp-3 min-h-[3rem]">
                      {book.title === "アミダス人" ? (
                        <>
                          アミダス<ruby>人<rt className="text-[0.5rem]">ひと</rt></ruby>
                          {book.subtitle && <span className="block text-xs text-gray-600 font-bold mt-0.5">{book.subtitle}</span>}
                        </>
                      ) : (
                        book.title
                      )}
                    </h4>
                    <p className="text-xs text-gray-500 mb-1">
                      {new Date(book.publishDate).toLocaleDateString('ja-JP', { year: 'numeric', month: 'short' })}
                    </p>
                    <p className="text-sm font-bold text-blue-600">
                      ¥{book.price.toLocaleString()}
                    </p>
                  </div>
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
