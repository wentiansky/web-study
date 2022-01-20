function getName(name) {
    if (typeof name === 'string') {
        return name;
    }
    return name();
}
