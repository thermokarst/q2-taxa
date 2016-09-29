from setuptools import setup, find_packages
import re
import ast

# version parsing from __init__ pulled from Flask's setup.py
# https://github.com/mitsuhiko/flask/blob/master/setup.py
_version_re = re.compile(r'__version__\s+=\s+(.*)')

with open('q2_taxa/__init__.py', 'rb') as f:
    hit = _version_re.search(f.read().decode('utf-8')).group(1)
    version = str(ast.literal_eval(hit))

setup(
    name="q2-taxa",
    version=version,
    packages=find_packages(),
    install_requires=['qiime >= 2.0.0', 'pandas', 'q2-types', 'trender'],
    author="Matthew Ryan Dillon",
    author_email="matthewrdillon@gmail.com",
    description="Work with taxonomies in QIIME 2",
    entry_points={
        "qiime.plugins":
        ["q2-taxa=q2_taxa.plugin_setup:plugin"]
    }
)