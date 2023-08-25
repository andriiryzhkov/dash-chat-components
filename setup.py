import json
import io
from setuptools import setup


with open("package.json") as f:
    package = json.load(f)

package_name = package["name"].replace(" ", "_").replace("-", "_")

setup(
    name=package_name,
    version=package["version"],
    author=package["author"],
    url=package["homepage"],
    project_urls={
        "Bug Reports": package["bugs"]["url"],
        "Source": package["repository"]["url"],
    },
    packages=[package_name],
    include_package_data=True,
    license=package["license"],
    description=package["description"],
    long_description=io.open("README.md", encoding="utf-8").read(),
    long_description_content_type="text/markdown",
    install_requires=["dash>=2.5.1"],
    python_requires=">=3.7, <4",
    classifiers=[
        "Development Status :: 4 - Beta",
        "Framework :: Dash",
        "Topic :: Communications :: Chat",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
        "Programming Language :: Python",
        "Programming Language :: Python :: 3.7",
        "Programming Language :: Python :: 3.8",
        "Programming Language :: Python :: 3.9",
        "Programming Language :: Python :: 3.10",
        "Programming Language :: Python :: 3.11",
    ],
)
