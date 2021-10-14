const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    assetPrefix: isProd ? 'https://hinjar.github.io/tax-deduction/' : '',
}