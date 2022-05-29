import time
import hashlib
import os
from flask import Flask, flash, request,redirect
from werkzeug.utils import secure_filename

app = Flask(__name__)
# html部分
# <form action="/upload" method="post" enctype="multipart/form-data">
#     <input type="file" name="file">
#     <input type="submit" value="上传">
# </form>

# 上传路由
# 文件上传目录
app.config['UPLOAD_FOLDER'] = 'uploads'
# 文件上传大小
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024
# 文件上传格式
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}
# 判定文件格式是否允许
def is_allowed_file(filename):
    return '.'in filename and filename.split('.')[-1].lower() in ALLOWED_EXTENSIONS

@app.route('/upload', methods=['POST'])
def upload():
    # 'file'要与 input中name变量相同
    if 'file' not in request.files:
        flash('No file part')
        return redirect('/test')
    file = request.files['file']
    print('上传前文件名：',file.filename)
    # 判定是否选择了文件
    if file.filename == '':
        flash('未选择文件')
        return redirect('/test')
    # 判定文件类型是否符合要求
    if file and is_allowed_file(file.filename):
        filename = secure_filename(file.filename)
        md5 = hashlib.md5(str(time.time()).encode('utf-8')).hexdigest()[:15]
        filename = md5 + '.' + filename.split('.')[-1]
        print('上传后文件名：',filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'],filename))
    return redirect('/test')