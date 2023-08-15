import json
import io
from setuptools import setup


with open('package.json') as f:
    package = json.load(f)

package_name = package["name"].replace(" ", "_").replace("-", "_")

setup(
    name=package_name,
    version=package["version"],
    author=package['author'],
    packages=[package_name],
    include_package_data=True,
    license=package['license'],
    description=package['description'],
    install_requires=["dash>=2.5.1"],
    classifiers=[
        'Framework :: Dash',
    ],
    long_description=io.open("README.md", encoding="utf-8").read(),
    long_description_content_type="text/markdown",
)
