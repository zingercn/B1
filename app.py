from flask import Flask, render_template
app = Flask(__name__)
# 模板热加载
app.config.update({
    'TEMPLATES_AUTO_RELOAD':True,
})

# 首页
@app.route('/')
def index():
    return render_template('index.html')

# 地球
@app.route('/earth')
def earth():
    return render_template('earth.html')

# 地球内容页面
@app.route('/earthcontent/<string:foldername>')
def earth_content(foldername=None):
    content = ''
    with open('static/earth-doc/'+foldername+'/index.html', 'r', encoding='utf-8') as f:
        content = f.read()
    # print(content)
    return render_template('earthcontent.html', content=content)

# 火星
@app.route('/mars')
def mars():
    return render_template('mars.html')

# 404
@app.errorhandler(404)
def page_not_found(error):
    return render_template('notfound.html'), 404

# 500
@app.errorhandler(500)
def page_not_found(error):
    return render_template('error.html'), 500
